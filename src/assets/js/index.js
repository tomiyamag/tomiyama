import SmoothScroll from './utils/SmoothScroll';
import Slider4K from './utils/Slider4K';
import Collections from './utils/Collections';
import Trending from './utils/Trending';

class Main {
  constructor() {
    new SmoothScroll();
    new Slider4K();
    new Collections();
    new Trending();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
