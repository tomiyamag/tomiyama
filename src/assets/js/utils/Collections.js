import Masonry from 'masonry-layout';

export default class Collections {
  constructor() {
    const container = document.querySelector('.collections__list');
    const msnry = new Masonry(container, {
      itemSelector: '.collections__item',
      percentPosition: true,
      horizontalOrder: true,
      gutter: 30
    });
  }
}
