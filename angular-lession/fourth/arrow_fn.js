//this问题
var obj = {
    a:1,
    b:function () {
        setTimeout(()=>{ //箭头函数中没有this指向，从而解决了this问题
            //定时器中的this是setTimeout自己
            console.log(this.a);
        },1000);
    }
};
obj.b();
//1.bind可以改变this指向
/*var a = function (a) {
    return a;
};*/
// const a = (a) => {return a};
const arr = a => a;
console.log(arr(2));