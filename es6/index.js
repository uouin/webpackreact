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
var fn = () =>{
    return str;
}
document.body.innerHTML = "<div>" + fn() + "</div>";

class Studet {
    hello(){
        console.log('hello es6');
    }
}
var st = new Studet;
st.hello();

class Leo extends Studet{

}
var l = new Leo;
console.log('-----leo16-----');
l.hello();