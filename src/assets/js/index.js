import SmoothScroll from './utils/SmoothScroll';

class Main {
  constructor() {
    new SmoothScroll();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
