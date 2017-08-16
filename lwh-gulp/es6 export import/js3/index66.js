/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var allen = 'allen',
    lhh = 'lhh',
    xw = 'xw';
var fn = function fn() {
    alert(111);
};
exports.allen = allen;
exports.lhh = lhh;
exports.xw = xw;
exports.fn = fn;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var aaa = exports.aaa = function aaa() {
  console.log('aaa');
},
    bbb = exports.bbb = 'bbb';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var haha = { name: 'haha' },
    hehe = ['hehe'];

exports.hoho = haha;
exports.heihei = hehe;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

//export default [{name:'allen'},{name:'jack'}];
/*
export default function(){
    console.log(111);
}*/

function fn() {
    alert(1112222);
}
exports.default = fn;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lwh = function () {
    _createClass(Lwh, [{
        key: 'val',
        value: function val() {
            return this.a + this.b;
        }
    }]);

    function Lwh(a, b) {
        _classCallCheck(this, Lwh);

        this.a = a;
        this.b = b;
        this.fuck = { name: 'fuck' };
        this.shit = { name: 'shit' };
    }

    //原型的私有方法只能通过原型来调用 实例不能调用


    _createClass(Lwh, null, [{
        key: 'selfFn',
        value: function selfFn() {
            console.log('selfFn');
        }
    }]);

    return Lwh;
}();

//let lwh=new Lwh(2,3);

//console.log(lwh.val());

exports.Lwh = Lwh;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(0);

var _index2 = __webpack_require__(1);

var _index3 = __webpack_require__(2);

var _index4 = __webpack_require__(3);

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import {allen,lhh,xw,fn} from '../export/index5';

function heihei1() {
    console.log(111);
}
var obj = { name: 'obj' };
var aObj = {
    heihei1: heihei1,
    obj: obj,
    value: 1
};
aObj.heihei1();

console.log(aObj);

var str = '\u54C8\u54C8\u54C8\u54C8\u597D\n\u54C8\u54C8\u54C8\u54C8\u597D\u54C8\u54C8\u54C8\u54C8\u597D\u54C8\n\u54C8\u54C8\u54C8\u597D\u54C8\u54C8\u54C8\u54C8\u597D\u54C8\u54C8\u54C8\u54C8\u597D\u54C8\n\u54C8\u54C8\u54C8\u597D';

console.log(str);

var lwh = new _index6.Lwh(2, 3);
console.log(lwh);

var Jack = function (_Lwh) {
    _inherits(Jack, _Lwh);

    function Jack() {
        _classCallCheck(this, Jack);

        return _possibleConstructorReturn(this, (Jack.__proto__ || Object.getPrototypeOf(Jack)).apply(this, arguments));
    }

    _createClass(Jack, [{
        key: 'fn',
        value: function fn() {
            console.log(this.fuck);
        }

        //继承的孩子也可以有私有方法

    }], [{
        key: 'jackSelfFn',
        value: function jackSelfFn() {
            console.log('jackSelfFn');
        }
    }]);

    return Jack;
}(_index6.Lwh);

Jack.jackSelfFn();

var jack = new Jack(1, 2);

//Lwh.selfFn();
/*jack.haha=function(){
    console.log('hahahahaha');
}

jack.haha();*/

var a = 88888888122222;
/*console.log(allen);
console.log(lhh);
console.log(xw);
console.log(fn);*/

/*console.log(aaa);
console.log(bbb);*/

/*console.log(hoho);
console.log(heihei);*/

/*console.log(index4);*/

console.log(_index.lhh);

/***/ })
/******/ ]);