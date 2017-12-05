var React = require("react");
var ReactDOM = require("react-dom");
var diva = document.createElement("div");
document.body.appendChild(diva);

require("./css/todo");
// import MyImage from "./css/back.jpg";
let appClass = require("./app.jsx");
// let dataJson = require("./data.json");
let app = appClass.default;
import Item from "./item";

consolelog("app?default", appClass);

class Main extends React.Component {
  render() {
    var dataA = app.dataArr;
    var status = app.status;

    var loginContern,
      functionContern,
      manageContern,
      footer,
      num = 0;

    if (!status.login) {
      loginContern = (
        <section className="main">
          {/* <input
            className="toggle-all"
            type="checkbox"
            onChange={this.toggleaAll}
            checked={num === 0 ? true : false}
          /> */}
          <input
            className="nameInput"
            ref="name"
            placeholder="姓名"
            defaultValue="aaa"
            onKeyDown={this.keyDownHandle}
          />
          <input
            className="nameInput"
            ref="pass"
            placeholder="密码"
            defaultValue="aaa"
            onKeyDown={this.keyDownHandle}
          />
          <button className="login" onClick={this.login.bind(this)}>
            登录
          </button>
        </section>
      );
    } else { 
      functionContern = (
        <section className="main">
          <ul className="todoList">
            <li className="fun"><button onClick={this.toManage}>员工管理</button></li>
            <li className="fun"><button onClick={this.toHistory}>历史记录</button></li>
            <li className="fun"><button>超级演说家</button></li>
          </ul>
        </section>
      );
      manageContern = (
        <section className="main none">
          <ul className="todoList">
            {dataA.map(
              function(item, index) {
                return (
                  <Item
                    key={index}
                    {...item}
                    toggle={this.toggle.bind(this, item.id)}
                    delete={this.delete.bind(this, item.id)}
                  />
                );
              }.bind(this)
            )}
          </ul>
        </section>
      );
    }

    //---------------------------
    if (dataA.length == 0) {
      // 内容组件
      loginContern = (
        <section className="main">
          {/* <input
            className="toggle-all"
            type="checkbox"
            onChange={this.toggleaAll}
            checked={num === 0 ? true : false}
          /> */}
          <ul className="todoList">
            {dataA.map(
              function(item, index) {
                return (
                  <Item
                    key={index}
                    {...item}
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
          </span>
        </footer>
      );
    }
    return (
      <div className="contain">
        <header className="header">
          <p>
            <i className="iconfont">&#xe893;</i>
            {this.props.name}{" "}
          </p>
        </header>
        {loginContern}
        {functionContern}
        {footer}
      </div>
    );
  }
  keyDownHandle(event) {
    if (event.keyCode == 13 && event.target.value) {
      // 按下enter
      app.addItem(event.target.value);
      // event.target.value = "";
    }
  }
  login() {
    // var input = React.findDOM(this.refs.name);
    var name = this.refs.name.value;
    var pass = this.refs.pass.value;
    if (name === "") {
      alert("请输入姓名");
    } else if (pass === "") {
      alert("请输入密码");
    } else {
      if (!app.login(name, pass)) {
        alert("密码错误");
      }
    }
  }
  toManage(){
    app.toManage();
  }
  toggleaAll(event) {
    // consolelog(event.target.checked);//input>checked
    app.toggleaAll(event.target.checked);
  }
  toggle(id, event) {
    // 属性也可以传函数
    consolelog(event.target.checked);
    app.toggle(id);
  }
  delete(id) {
    app.delete(id);
  }
}

function render() {
  ReactDOM.render(<Main name="超级演说家后台系统" />, diva);
}
render();
app.render = render;

function consolelog() {
  arguments[1] === undefined
    ? console.log(`------------------------\n`, arguments[0])
    : console.log(`------------${arguments[0]}------------\n`, arguments[1]);
}
