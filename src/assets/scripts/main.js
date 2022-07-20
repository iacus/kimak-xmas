/* scripts/main.js */

'use strict'
import viewportUnitsBuggyfill from 'viewport-units-buggyfill'
import Debug from './modules/debug'
import Checks from './modules/checks'
import Scroll from './modules/scroll'

viewportUnitsBuggyfill.init()

const initFun = () => {
  new Debug().init()
  // new Checks().init()
  new Scroll().init()
}


function documentReady (fn) {
  if (document.readyState !== 'loading') {
    fn()
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn)
    console.log('Ready!')
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState !== 'loading') {
        fn()
      }
    })
  }
}
documentReady(initFun)

// if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//   initFun();
// } else {
//   document.addEventListener('DOMContentLoaded', initFun);
// }
