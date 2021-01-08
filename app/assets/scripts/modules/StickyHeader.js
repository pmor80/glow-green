import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector('.site-header');
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events();
  }

  events() {
    window.addEventListener(
      'scroll',
      throttle(() => this.runOnScroll(), 200)
    );
    window.addEventListener(
      'resize',
      debounce(() => {
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }

  runOnScroll() {
    if (window.scrollY > 400) {
      this.siteHeader.classList.add('site-header--small');
    } else {
      this.siteHeader.classList.remove('site-header--small');
    }
  }
}

export default StickyHeader;
