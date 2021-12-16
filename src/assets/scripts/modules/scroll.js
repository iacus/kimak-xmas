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
    }, 400);
  }
}
