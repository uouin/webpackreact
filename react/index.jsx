// var str = require('./tool.js');
// document.body.innerHTML = "wwww:" + str;

// define([
//     './tool.js',
// ], function (str) {
//     document.body.innerHTML = "<div>" + str + "</div>";
// });

// require('style-loader!css-loader!./index.css');
var React = require('react');
var ReactDOM = require('react-dom');
var diva = document.createElement("div");
var divb = document.createElement("div");
divb.className = "none";
document.body.appendChild(diva);
document.body.appendChild(divb);

// var Hello = React.createClass({
//     render: function () {
//         return (<h1> hello </h1>);
//     }
// });//错误写法
import Table from './util';
ReactDOM.render(
  <Table name="gg" />,
  divb
);

// todo demo
require('./css/todo');
import MyImage from './css/back.jpg';
let appClass = require('./app.jsx');
let dataJson = require('./data.json');
let app = appClass.default;
import Item from './item';

consolelog('app?default', appClass);
consolelog('Json文件',dataJson);
consolelog1(1/0);

class Main extends React.Component {
  render() {
    var dataA = this.props.dataA;

    var content, footer, num = 0;
    // reduce的作用???
    dataA.reduce((n, item) => {
      num = item.complete ? num : num + 1; // num个未选
    }, 0);

    if (dataA.length != 0) {
      // 内容组件
      content = <section className="main">
        <input className="toggle-all" type="checkbox" onChange={this.toggleaAll} checked={num === 0 ? true : false} />
        <ul className="todoList">
          {
            dataA.map(function (item, index) {
              return <Item key={index} {...item} toggle={this.toggle.bind(this, item.id)} delete={this.delete.bind(this, item.id)} />
            }.bind(this))
          }
        </ul>
      </section>
      
      footer = <footer className="footer">
        <span className="todoconut">
          <strong>{num}</strong>
          <span>条未选中</span>
          <img src={MyImage} />
        </span>
      </footer>

    }
    return (
      <div className="contain">
        <header className="header">
          
          <p><i className="iconfont">&#xe893;</i>Hello {this.props.name} </p>
          <input className="nameInput" placeholder="请输入内容" defaultValue="mxmxm1" onKeyDown={this.keyDownHandle} />
        </header>
        {content}
        {footer}
      </div>
    );

  }
  keyDownHandle(event) {
    if (event.keyCode == 13 && event.target.value) {
      // 按下enter
      app.addItem(event.target.value);
      event.target.value = "";
    }
  }
  toggleaAll(event) {
    // consolelog(event.target.checked);//input>checked
    app.toggleaAll(event.target.checked);
  }
  toggle(id, event) {
    // 属性也可以传函数
    consolog(event.target.checked);
    app.toggle(id);
  }
  delete(id) {
    app.delete(id);
  }
}





function render(dataArr) {
  ReactDOM.render(
    <Main name="toodo" dataA={dataArr} />,
    diva
  );
}
render(app.dataArr);
app.render = render;

function consolelog() {
  arguments[1] === undefined
    ? console.log(`------------------------\n`, arguments[0])
    : console.log(`------------${arguments[0]}------------\n`, arguments[1]);
}

