'use strict'

import {
    TweenLite,
    CSSPlugin,
} from "gsap/all";

// Ensure modules don't get dropped by tree-shaking
const activated = [
    TweenLite,
    CSSPlugin,
];

import LocomotiveScroll from 'locomotive-scroll';

export default class Single {
  constructor() {
    this.config = {

    }
    this.scroll = ''
  }

  startVirtualScroll() {
    console.log('init virtual scroll!');

    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      touchMultiplier: 2,
      getSpeed: true,
      tablet: {
        smooth: true
      },
      smartphone: {
        smooth: true
      },
    })

    this.scroll.on('call', (e) => {

      if (e == 'black-theme') {
        document.querySelector('body').classList.toggle('black-theme')
      }

      console.log(e);

    })

  }

  init() {
    this.startVirtualScroll()
  }
}
