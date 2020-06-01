import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default class ScrollLock {
  constructor() {
    this.toggle = $('.drawer-toggle');
    this.isOpen = 0;
    this.init()
  }

  init() {
    this.toggle.on('click', () => {
      this.isOpen === 0 ? this.open() : this.close();
    });

    window.addEventListener('resize', this.close);
    $('.drawer').on('drawer.closed', this.close)
  }

  open() {
    this.isOpen = 1;

    const target = document.querySelector('.drawer-nav')
    disableBodyScroll(target);
  }

  close() {
    this.isOpen = 0;
    clearAllBodyScrollLocks();
  }
}
