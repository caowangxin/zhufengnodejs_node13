//1.buffer 固定的内存 很像数组 但是不能更改大小
//2.声明的方式
//1).通过长度创建
//产生的buffer是随机的 并且最大0xff  16进制
var buffer = new Buffer(3);
buffer.fill(0);
console.log(buffer);
//2).通过数组来构建buffer
var buffer = new Buffer(['a',-1,19]); //会自动转化成16进制
//超过255 则对256取模,不识别则为0，负数则加256
console.log(buffer);
//3).通过字符串构建buffer
var buffer = new Buffer('珠');
console.log(buffer);
//buffer.slice() forEach
var buffer = new Buffer([1,2,3,4,5]);
var newBuffer = buffer.slice(0,3);//包前不包后
newBuffer[0] = 128;
console.log(buffer); //这里存的是地址
//字符串具有不变性
//3.copy
//拷贝的方法
var buffer = new Buffer(12);
var buffer1 = new Buffer('珠峰');
var buffer2 = new Buffer('培训');
// targetBuffer 目标buffer, targetStart目标的开始, sourceStart源的开始, sourceEnd 源的结束
buffer1.copy(buffer,0,0,6);
buffer2.copy(buffer,6,0,6);
console.log(buffer.toString());
//buffer可以调用toString转换成字符串
var buffer = new Buffer(9);
var buffer1 = new Buffer('我很');
var buffer2 = new Buffer('帅');
buffer2.copy(buffer);
buffer1.copy(buffer);
console.log(buffer.toString());