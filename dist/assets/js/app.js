/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/assets/js/index.js","commons~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-drawer */ "./node_modules/jquery-drawer/dist/js/drawer.js");
/* harmony import */ var jquery_drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_drawer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_SmoothScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/SmoothScroll */ "./src/assets/js/utils/SmoothScroll.js");
/* harmony import */ var _utils_Slider4K__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Slider4K */ "./src/assets/js/utils/Slider4K.js");
/* harmony import */ var _utils_Collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/Collections */ "./src/assets/js/utils/Collections.js");
/* harmony import */ var _utils_Trending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/Trending */ "./src/assets/js/utils/Trending.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var Main = function Main() {
  _classCallCheck(this, Main);

  new _utils_SmoothScroll__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _utils_Slider4K__WEBPACK_IMPORTED_MODULE_2__["default"]();
  new _utils_Trending__WEBPACK_IMPORTED_MODULE_4__["default"]();
  window.addEventListener('load', function () {
    new _utils_Collections__WEBPACK_IMPORTED_MODULE_3__["default"]();
  });
  $('.drawer').drawer();
  $('.drawer-menu li a').on('click', function () {
    $('.drawer').drawer('close');
  });
};

window.addEventListener('DOMContentLoaded', function () {
  new Main();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/assets/js/utils/Collections.js":
/*!********************************************!*\
  !*** ./src/assets/js/utils/Collections.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collections; });
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Collections = function Collections() {
  _classCallCheck(this, Collections);

  var container = document.querySelector('.collections__list');
  var msnry = new masonry_layout__WEBPACK_IMPORTED_MODULE_0___default.a(container, {
    itemSelector: '.collections__item',
    percentPosition: true,
    horizontalOrder: true,
    gutter: 30
  });
};



/***/ }),

/***/ "./src/assets/js/utils/Slider4K.js":
/*!*****************************************!*\
  !*** ./src/assets/js/utils/Slider4K.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider4K; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_2__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Slider4K =
/*#__PURE__*/
function () {
  function Slider4K() {
    _classCallCheck(this, Slider4K);

    this.carousel = document.querySelector('.carousel');
    this.slides = document.getElementsByClassName('carousel-cell');
    this.options = {
      pageDots: false,
      prevNextButtons: false,
      wrapAround: true,
      pauseAutoPlayOnHover: false,
      selectedAttraction: 0.015
    };
    this.init();
  }

  _createClass(Slider4K, [{
    key: "init",
    value: function init() {
      var _this = this;

      var flkty = new flickity__WEBPACK_IMPORTED_MODULE_2___default.a(this.carousel, this.options);
      var carouselStatus = $('.carousel-status');
      var carouselCurrent = carouselStatus.find('.carousel-status__num--current');
      var carouselTotal = carouselStatus.find('.carousel-status__num--total');
      flkty.on('scroll', function () {
        flkty.slides.forEach(function (slide, i) {
          var image = _this.slides[i];
          var x = (slide.target + flkty.x) * -1 / 4;
          image.style.backgroundPositionX = "".concat(x, "px");
        });
      }); // ステータス

      var updateStatus = function updateStatus() {
        carouselCurrent.text(flkty.selectedIndex + 1);
        carouselTotal.text(flkty.slides.length);
      };

      updateStatus();
      flkty.on('change', updateStatus); // プログレスバー

      var duration = 5;
      var interval = 10;
      var progressBar = document.querySelector('.progress-bar');
      var isPaused = false;
      this.carousel.addEventListener('mouseenter', function () {
        isPaused = true;
      });
      this.carousel.addEventListener('mouseleave', function () {
        isPaused = false;
      });
      var percentTime, step, tick;

      var startProgressbar = function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPaused = false;
        tick = window.setInterval(increase, interval);
      };

      var increase = function increase() {
        if (!isPaused) {
          step = duration * 1000 / interval;
          percentTime += 100 / step;
          progressBar.style.width = percentTime + '%';

          if (percentTime >= 100) {
            flkty.next();
            startProgressbar();
          }
        }
      };

      var resetProgressbar = function resetProgressbar() {
        progressBar.style.width = 0 + '%';
        clearTimeout(tick);
      };

      startProgressbar(); // Next Prev

      var prev = $('.carousel-arrows__arrow--prev');
      var next = $('.carousel-arrows__arrow--next');
      prev.on('click', function () {
        flkty.previous(true);
        startProgressbar();
      });
      next.on('click', function () {
        flkty.next(true);
        startProgressbar();
      });
      flkty.on('dragMove', startProgressbar);
    }
  }]);

  return Slider4K;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/assets/js/utils/SmoothScroll.js":
/*!*********************************************!*\
  !*** ./src/assets/js/utils/SmoothScroll.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmoothScroll; });
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");
/* harmony import */ var core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_src_uncompressed_plugins_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/src/uncompressed/plugins/ScrollToPlugin */ "./node_modules/gsap/umd/ScrollToPlugin.js");
/* harmony import */ var gsap_src_uncompressed_plugins_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_src_uncompressed_plugins_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_3__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var scrollToPlugin = new gsap_src_uncompressed_plugins_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_3___default.a();

var SmoothScroll =
/*#__PURE__*/
function () {
  function SmoothScroll() {
    _classCallCheck(this, SmoothScroll);

    this.speed = 0.8;
    this.ease = Expo.easeOut;
    this.init();
  }

  _createClass(SmoothScroll, [{
    key: "init",
    value: function init() {
      this.anchor();
      this.param();
    }
  }, {
    key: "anchor",
    value: function anchor() {
      var _this2 = this;

      $('a[href^="#"]').on('click', function (e) {
        var _this = $(e.currentTarget);

        if (!_this.hasClass('is-no-smooth')) {
          var href = _this.attr('href');

          var headerHeight = $('#header').height();
          var position = $(href).offset().top - headerHeight;

          _this2.tween(position);

          return false;
        }
      });
    }
  }, {
    key: "param",
    value: function param() {
      var _this3 = this;

      window.addEventListener('load', function () {
        var url = $(location).attr('href');

        if (url.indexOf('?id=') !== -1) {
          var id = url.split('?id=');
          var target = $('#' + id[id.length - 1]);
          var headerHeight = $('#header').height();

          if (target.length) {
            var position = target.offset().top - headerHeight;

            _this3.tween(position);
          }
        }
      });
    }
    /**
     * Tween
     * @param {Number} position スクロールさせる位置
     */

  }, {
    key: "tween",
    value: function tween(position) {
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenLite"].to(window, this.speed, {
        scrollTo: {
          y: position,
          autoKill: false
        },
        ease: this.ease
      });
    }
  }]);

  return SmoothScroll;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/assets/js/utils/Trending.js":
/*!*****************************************!*\
  !*** ./src/assets/js/utils/Trending.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trending; });
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Trending = function Trending() {
  _classCallCheck(this, Trending);

  var options = {
    pageDots: false,
    freeScroll: true,
    prevNextButtons: false
  };
  var flkty = new flickity__WEBPACK_IMPORTED_MODULE_0___default.a('.trending__list', options);
  var progressBar = document.querySelector('.progress-bar-2');

  if (window.innerWidth > 768) {
    flkty.select(2);
  }

  flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
  });
  var prev = $('.trending__arrows .arrow--prev');
  var next = $('.trending__arrows .arrow--next');
  prev.on('click', function () {
    flkty.previous(false);
  });
  next.on('click', function () {
    flkty.next(false);
  });
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=../sourcemaps/app.js.map