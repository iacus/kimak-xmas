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
      touchMultiplier: 3,
      // getSpeed: true,
      tablet: {
        smooth: true
      },
      smartphone: {
        smooth: true
      },
    })

  }

  callEvent () {
    this.scroll.on('call', (e,a,y) => {
      const body = document.querySelector('body')

      if (e == 'black-theme' && !body.classList.contains('black-theme')) {
        body.classList.add('black-theme')
      } else if (e == 'black-theme' && y.progress <= 0) {
        body.classList.remove('black-theme')
      }

      console.log(a);
      console.log(y);
      console.log(e);

    })
  }

  lockScroll () {
    const playlist = document.querySelector('.playlist')
    const stripes = document.querySelector('.stripes')

    playlist.addEventListener('click', (event) => {
      playlist.classList.add('clicked')
    });
    playlist.addEventListener('mouseleave', (event) => {
      playlist.classList.remove('clicked')
    });
    stripes.addEventListener('mouseenter', (event) => {
      playlist.classList.remove('clicked')
    });
  }

  init() {


    setTimeout(() => {
      this.startVirtualScroll()
      this.lockScroll()
      this.callEvent()
    }, 1000);

    // window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('The page has fully loaded');
    // this.startVirtualScroll()
    // this.lockScroll()
    // });

    this.startVirtualScroll()
    this.lockScroll()
  }
}
