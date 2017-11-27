"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var str = require('./tool.js');
// document.body.innerHTML = "wwww:" + str;

// define([
//     './tool.js',
// ], function (str) {
//     document.body.innerHTML = "<div>" + str + "</div>";
// });

// require('style-loader!css-loader!./index.css');
var str = "hi es66";

// require('./style');
var fn = function fn() {
    return str;
};
document.body.innerHTML = "<div>es6:" + fn() + "</div>";

var Studet = function () {
    function Studet() {
        _classCallCheck(this, Studet);
    }

    _createClass(Studet, [{
        key: "hello",
        value: function hello() {
            console.log('hello es6');
        }
    }]);

    return Studet;
}();

var st = new Studet();
st.hello();

var Leo = function (_Studet) {
    _inherits(Leo, _Studet);

    function Leo() {
        _classCallCheck(this, Leo);

        return _possibleConstructorReturn(this, (Leo.__proto__ || Object.getPrototypeOf(Leo)).apply(this, arguments));
    }

    return Leo;
}(Studet);

var l = new Leo();
console.log('-----leo16-----');
l.hello();
