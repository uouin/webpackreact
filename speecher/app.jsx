let app = {
  status: {
    login: true, //登录状态
    page:{
        Manage:false,
        history:false
    }
  },
  user: [
    {
      name: "aaa",
      pass: "aaa"
    },
    {
        name: "aaa",
        pass: "a"
      }
  ],
  login: function() {

    this.user.forEach(item => {
      if (item.name == arguments[0] && item.pass == arguments[1]) {
        this.status.login = true;
      }
    });
    if(this.status.login){
        app.render();
    }
    return this.status.login;
  },
  toManage:function(){
    this.status.page.forEach(item=>{
        console.log(item);
    })
    // this.status.login = true;
    
  },
  dataArr: [
    {
      id: Date.now(),
      content: "value",
      complete: true
    }
  ],
  addItem: function(value) {
    this.dataArr.push({
      id: Date.now(),
      content: value,
      complete: false
    });
    app.render(this.dataArr);
    console.log(this.dataArr);
  },
  toggleaAll: function(boolen) {
    this.dataArr.forEach(item => {
      item.complete = boolen;
    });
    app.render(this.dataArr);
  },
  toggle: function(id) {
    // console.log(id);
    this.dataArr.forEach(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
    });
    app.render(this.dataArr);
  },
  delete: function(id) {
    // 数组按规则过滤
    var newArr = this.dataArr.filter(item => {
      return item.id != id;
    });
    this.dataArr = newArr;
    app.render(this.dataArr);
  },
  print: function() {
    console.log("------++=-", arguments[0]);
  }
};
export default app;
