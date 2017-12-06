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
import { Button, WingBlank } from "antd-mobile";

consolelog("app?default", appClass);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: false,
      login: true, //false
      toFunction: false, //true,
      toManage: true, //false,
      toHistory: false,
      defaultFace:
        "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1627666224,1511761802&fm=58",
      editFace:
        "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1627666224,1511761802&fm=58",
      editId: "",
      editName: ""
    };
  }
  clocePanel() {
    this.setState({
      panel: false
    });
  }
  login() {
    var name = this.refs.name.value;
    var pass = this.refs.pass.value;
    if (name === "") {
      alert("请输入姓名");
    } else if (pass === "") {
      alert("请输入密码");
    } else if (!app.login(name, pass)) {
      alert("密码错误");
    } else {
      this.setState({
        login: true
      });
    }
  }
  goHome() {
    if (this.state.login) {
      this.setState({
        panel: false,
        toFunction: true,
        toManage: false,
        toHistory: false
      });
    }
  }
  toManage() {
    this.setState({
      toFunction: false,
      toManage: true
    });
  }
  render() {
    var dataA = app.dataArr;
    var workers = app.workers;
    var that = this.state;
    var loginContern,
      functionContern,
      manageContern,
      footer,
      num = 0;

    if (!that.login) {
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
        <section className={that.toFunction ? "Qshow" : "none"}>
          <ul className="todoList">
            <li className="fun">
              <button onClick={this.toManage.bind(this)}>员工管理</button>
            </li>
            <li className="fun">
              <button onClick={this.toHistory}>历史记录</button>
            </li>
            <li
              className="fun"
              style={{ display: that.visible ? "block" : "none" }}
            >
              <button>{this.state.text}超级演说家</button>
            </li>
          </ul>
        </section>
      );
      manageContern = (
        <section className={that.toManage ? "Qshow" : "none"}>
          <ul className="todoList">
            {workers.map(
              function(item, index) {
                return (
                  <Item
                    key={index}
                    {...item}
                    edit={this.edit.bind(this, item.id, item.name)}
                    destory={this.destory.bind(this, item.id)}
                  />
                );
              }.bind(this)
            )}
            <li className="add" onClick={this.add.bind(this)} />
          </ul>
          <div
            className="grayContain"
            style={{ display: that.panel ? "block" : "none" }}
          >
            <div className={that.toManage ? "editPanenl Qshow" : "none"}>
              <img
                src="http://static.seeyouyima.com/ad-activity.meiyou.com/ruleClose.e89de0bf5118215888b37fdb5c2ad55e.png"
                alt=""
                className="close"
                onClick={this.clocePanel.bind(this)}
              />
              <img
                src={that.editFace ? that.editFace : that.defaultFace}
                alt=""
                className="workFace"
              />
              <input type="file" className="file" accept="image/*" ref="file" onChange={this.fileHandle.bind(this)}/>
              <input
                type="text"
                className="putName"
                placeholder="姓名"
                value={that.editName}
                onChange={this.onChange.bind(this)}
              />
              <div className="ensure" onClick={this.ensureEdit.bind(this)}>
                {that.editId ? "修改" : "添加"}
              </div>
            </div>
          </div>
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
          <p onClick={this.goHome.bind(this)}>
            <i className="iconfont">&#xe893;</i>
            {this.props.name}{" "}
          </p>
        </header>
        {/* <WingBlank size="lg">
          <Button className="btn" type="primary">
            primary 按钮
          </Button>
          <Button className="btn" disabled onClick={e => console.log(e)}>
            disabled 按钮
          </Button>
          <Button className="btn" loading>
            loading 按钮
          </Button>
        </WingBlank> */}
        {loginContern}
        {functionContern}
        {manageContern}
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
  edit(id, name) {
    // consolelog(id,name);
    this.setState({
      editId: id,
      editName: name,
      panel: true,
      editFace: ""
    });
    if (typeof window.FileReader == 'undefined') {
      var fileInput = this.refs.file;
      alert('你的浏览器不支持FileReader接口！');
      // 使选择控件不可操作
      fileInput.setAttribute('disabled', 'disabled');
    }
  }
  add() {
    this.setState({
      editId: "",
      editName: "",
      panel: true,
      editFace: ""
    });

    if (typeof window.FileReader == 'undefined') {
      var fileInput = this.refs.file;
      alert('你的浏览器不支持FileReader接口！');
      // 使选择控件不可操作
      fileInput.setAttribute('disabled', 'disabled');
    }
  }
  destory(id, event) {
    consolelog("destory");
    app.destory(id);
  }
  onChange(event) {
    this.setState({
      editName: event.target.value
    });
  }
  ensureEdit(event) {

    return
    if (this.state.editName == "") {
      alert("姓名不能为空");
    } else {
      app.editWorker(this.state.editId, this.state.editName);
      this.setState({
        panel: false
      });
    }
  }
  fileHandle(){
    var fileInput = this.refs.file;
    
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
