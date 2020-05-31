import SmoothScroll from './utils/SmoothScroll';
import Slider4K from './utils/Slider4K';
import Collections from './utils/Collections';
import Trending from './utils/Trending';

class Main {
  constructor() {
    new SmoothScroll();
    new Slider4K();
    new Trending();

    window.addEventListener('load', () => {
      new Collections();
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
