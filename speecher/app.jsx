let app = {
  user: [
    {
      name: "aaa",
      pass: "aaa"
    }
  ],
  workers:[
    {
      name:'同桌A',
      id:'01',
      imgUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1627666224,1511761802&fm=58',
      date:''
    },{
      name:'同桌B',
      id:'02',
      imgUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1627666224,1511761802&fm=58',
      date:''
    },{
      name:'同桌C',
      id:'03',
      imgUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1627666224,1511761802&fm=58',
      date:''
    },{
      name:'同桌A',
      id:'04',
      imgUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1627666224,1511761802&fm=58',
      date:''
    },{
      name:'',
      id:'05',
      imgUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1627666224,1511761802&fm=58',
      date:''
    },{
      name:'同桌C',
      id:'06',
      imgUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1627666224,1511761802&fm=58',
      date:''
    },{
      name:'同桌A',
      id:'07',
      imgUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1627666224,1511761802&fm=58',
      date:''
    }
  ],
  login: function() {
    var login = false;
    this.user.forEach(item => {
      if (item.name == arguments[0] && item.pass == arguments[1]) {
        login = true;
      }
    });
    return login;
  },
  editWorker:function(id,name){
    // console.log(id,name);
    if(id){
      this.workers.forEach(item => {
        if (item.id == id) {
          item.name = name;
        }
      });
    }else{
      this.workers.push({
        name:name,
        id: Date.now(),
        imgUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1627666224,1511761802&fm=58',
        date:''
      });
    }
    app.render();
  },
  destory:function(id){
    var newWork = this.workers.filter(item => {
      return item.id != id;
    });
    this.workers = newWork;
    app.render();
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
