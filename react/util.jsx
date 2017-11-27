// var str = require('./tool.js');
// document.body.innerHTML = "wwww:" + str;

// define([
//     './tool.js',
// ], function (str) {
//     document.body.innerHTML = "<div>" + str + "</div>";
// });

var React = require('react');
var ReactDOM = require('react-dom');

export default class Hello extends React.Component {
    render() {
        return ( <div> Hio yo { this.props.name } </div>);
        }
}