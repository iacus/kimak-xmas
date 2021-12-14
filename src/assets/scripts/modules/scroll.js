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
      // touchMultiplier: 3,
      getSpeed: true,
      tablet: {
        smooth: true
      },
      smartphone: {
        smooth: true
      },
    })

  }

  init() {
    this.startVirtualScroll()

    // if (document.querySelector('[data-scroll-container]')) {
    //   setTimeout(() => {
    //     this.startVirtualScroll()
    //   }, 200);
    //
    // }
    //
    //
    // document.addEventListener('swup:pageView', (event) => {
    //   if (document.querySelector('[data-scroll-container]')) {
    //     setTimeout(() => {
    //       this.startVirtualScroll()
    //     }, 200);
    //   }
    // });
  }
}
