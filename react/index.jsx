import React, { Component } from 'react';
// var React = require("react");
var ReactDOM = require("react-dom");
var diva = document.createElement("div");
document.body.appendChild(diva);

// var Hello = React.createClass({
//     render: function () {
//         return (<h1> hello </h1>);
//     }
// });//错误写法

require("./css/todo");                  //引css
import MyImage from "./css/back.jpg";   //引图片
import app from './app.jsx';            //引逻辑    代码简洁
let dataJson = require("./data.json");  //引JSON   开发减少与后台交互
import Item1,{Item} from "./item";              //引组件   大写   {}



console.log("Json文件", dataJson);

class Main extends React.Component {
  //构造函数，在创建组件的时候调用一次。
  constructor(props) {
    super(props);
    this.state = {
      str: "uouoououo"
    };
  }

  render() {
    var dataA = this.props.dataA;

    var content,
      footer,
      num = 0;

    dataA.reduce((n, item) => {
      num = item.complete ? num : num + 1; // num个未选
    }, 0);

    if (dataA.length != 0) {
      // 内容组件
      content = (
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={this.toggleaAll}
            checked={num === 0 ? true : false}
          />
          <ul className="todoList">
            {dataA.map(
              function (item, index) {
                return (
                  <Item
                    key={index}
                    {...item}
                    // id={item.id}
                    // content={item.content}
                    // complete={item.complete}
                    toggle={this.toggle.bind(this, item.id)}
                    delete={this.delete.bind(this, item.id)}
                  />
                );
              }.bind(this)
            )}
          </ul>
        </section>
      );

      footer = (
        <footer className="footer">
          <span className="todoconut">
            <strong>{num}</strong>
            <span>条未选中</span>
            {/* <img src={MyImage} /> */}
          </span>
        </footer>
      );
    }
    return (
      <div className="contain">
        <header className="header">
        <Item1 content={this.state.str} text="这里是" todo={this.todo.bind(this)}/>
          <p className="headerP">
            <i className="iconfont">&#xe893;</i>Hello {this.props.name}{" "}
          </p>
          <input
            className="nameInput"
            placeholder="请输入内容"
            defaultValue="mxmxm1"
            onKeyDown={this.keyDownHandle}
          />
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
    // console.log(event.target.checked);//input>checked
    app.toggleaAll(event.target.checked);
  }
  toggle(id, event) {
    // 属性也可以传函数
    console.log(event.target.checked);
    app.toggle(id);
  }
  delete(id) {
    app.delete(id);
  }
  todo(){
    this.todoa();
    console.log('2131312312');
    this.setState({
      str:'909090'
    })
  }
  todoa(){
    console.log('33333');
  }
}



function render(dataArr) {
  ReactDOM.render(<Main name='todo' dataA={dataArr} />, diva);
}

render(app.dataArr);
app.render = render;
