let app = {
    dataArr : [{  
        id:Date.now(),
        content:'value',
        complete:true}
    ],
    addItem:function(value){
        this.dataArr.push({
            id:Date.now(),
            content:value,
            complete:false
        });
        app.render(this.dataArr);
        console.log(this.dataArr);
    },
    toggleaAll:function(boolen){
        this.dataArr.forEach((item)=>{
            item.complete = boolen;
        });
        app.render(this.dataArr);
    },
    toggle:function(id){
        // console.log(id);
        this.dataArr.forEach((item)=>{
            if(item.id == id){
                item.complete = ! item.complete;
            }
        });
        app.render(this.dataArr);
    },
    delete:function(id){
        // 数组按规则过滤
        var newArr = this.dataArr.filter((item)=>{
            return item.id != id;
        });
        this.dataArr = newArr;
        app.render(this.dataArr);
    }
}
export default app;