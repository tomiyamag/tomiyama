import SmoothScroll from './utils/SmoothScroll';
import Jumbotron from './utils/Jumbotron';
import Collections from './utils/Collections';

class Main {
  constructor() {
    new SmoothScroll();
    new Jumbotron();
    new Collections();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
