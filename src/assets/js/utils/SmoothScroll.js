import { TweenLite } from 'gsap';
import ScrollToPlugin from 'gsap/src/uncompressed/plugins/ScrollToPlugin';

const scrollToPlugin = new ScrollToPlugin();

export default class SmoothScroll {
  constructor() {
    this.speed = 0.8;
    this.ease = Expo.easeOut;
    this.init();
  }

  init() {
    this.anchor();
    this.param();
  }

  anchor() {
    $('a[href^="#"]').on('click', e => {
      let _this = $(e.currentTarget);

      if (!_this.hasClass('is-no-smooth')) {
        const href = _this.attr('href');
        const headerHeight = $('#header').height();
        const position = $(href).offset().top - headerHeight;
        this.tween(position);

        return false;
      }
    });
  }

  param() {
    window.addEventListener('load', () => {
      const url = $(location).attr('href');

      if (url.indexOf('?id=') !== -1) {
        const id = url.split('?id=');
        const target = $('#' + id[id.length - 1]);
        const headerHeight = $('#header').height();

        if (target.length) {
          const position = target.offset().top - headerHeight;
          this.tween(position);
        }
      }
    });
  }

  /**
   * Tween
   * @param {Number} position スクロールさせる位置
   */
  tween(position) {
    TweenLite.to(window, this.speed, {
      scrollTo: {
        y: position,
        autoKill: false
      },
      ease: this.ease
    });
  }
}
