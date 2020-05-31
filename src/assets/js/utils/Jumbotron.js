import Flickity from 'flickity';

export default class Jumbotron {
  constructor() {
    this.carousel = document.querySelector('.carousel');
    this.slides = document.getElementsByClassName('carousel-cell');
    this.options = {
      pageDots: false,
      prevNextButtons: false,
      wrapAround: true,
      pauseAutoPlayOnHover: false,
      selectedAttraction: 0.015
    };
    this.init();
  }

  init() {
    const flkty = new Flickity(this.carousel, this.options);
    const carouselStatus = $('.carousel-status');
    const carouselCurrent = carouselStatus.find('.carousel-status__num--current');
    const carouselTotal = carouselStatus.find('.carousel-status__num--total');

    flkty.on('scroll', () => {
      flkty.slides.forEach((slide, i) => {
        const image = this.slides[i];
        const x = (slide.target + flkty.x) * - 1 / 4;
        image.style.backgroundPositionX = `${x}px`;
      });
    });

    // ステータス
    const updateStatus = () => {
      carouselCurrent.text(flkty.selectedIndex + 1);
      carouselTotal.text(flkty.slides.length);
    };

    updateStatus();

    flkty.on('change', updateStatus);

    // プログレスバー
    const duration = 5;
    const interval = 10;
    const progressBar = document.querySelector('.progress-bar');
    let isPaused = false;

    this.carousel.addEventListener('mouseenter', () => {
      isPaused = true;
    });

    this.carousel.addEventListener('mouseleave', () => {
      isPaused = false;
    });

    let percentTime, step, tick;

    const startProgressbar = () => {
      resetProgressbar();

      percentTime = 0;
      isPaused = false;
      tick = window.setInterval(increase, interval);
    };

    const increase = () => {
      if (!isPaused) {
        step = (duration * 1000) / interval;
        percentTime += 100 / step;
        progressBar.style.width = percentTime + '%';

        if (percentTime >= 100) {
          flkty.next();
          startProgressbar();
        }
      }
    };

    const resetProgressbar = () => {
      progressBar.style.width = 0 + '%';
      clearTimeout(tick);
    };

    startProgressbar();

    // Next Prev
    const prev = $('.carousel-arrows__arrow--prev');
    const next = $('.carousel-arrows__arrow--next');

    prev.on('click', () => {
      flkty.previous(true);
      startProgressbar();
    });

    next.on('click', () => {
      flkty.next(true);
      startProgressbar();
    });

    flkty.on('dragMove', startProgressbar);
  }

}
