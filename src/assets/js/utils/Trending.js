import Flickity from 'flickity';

export default class Trending {
  constructor() {
    const options = {
      pageDots: false,
      freeScroll: true,
      prevNextButtons: false
    };
    const flkty = new Flickity('.trending__list', options);
    const progressBar = document.querySelector('.progress-bar-2');

    flkty.select(2);

    flkty.on('scroll', progress => {
      progress = Math.max(0, Math.min(1, progress));
      progressBar.style.width = progress * 100 + '%';
    });

    const prev = $('.trending__arrows .arrow--prev');
    const next = $('.trending__arrows .arrow--next');

    prev.on('click', () => {
      flkty.previous(false);
    });

    next.on('click', () => {
      flkty.next(false);
    });
  }
}
