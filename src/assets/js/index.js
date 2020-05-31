import SmoothScroll from './utils/SmoothScroll';
import Jumbotron from './utils/Jumbotron';

class Main {
  constructor() {
    new SmoothScroll();
    new Jumbotron();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
