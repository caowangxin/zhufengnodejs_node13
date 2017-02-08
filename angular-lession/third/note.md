## npm
```
$ npm init -y
```
## 安装
```
$ npm install angular bootstrap --save
``` 

> 安装到当前目录下的node_modules文件

## 指令
- 装饰型指令(link函数)给标签赋予功能，red drag
- 组件式(会有模板)
## 声明指令
```
app.directive('direName',function(){
    return {
        restrict:'EA',限制替换的范围 
        template:''要替换的模板
        replace:false 不替换外部的标签
    }
});
```