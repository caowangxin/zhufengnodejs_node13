姜文   qq:1035465284  iphone:18310349227 
## markdown 语法
- ok1

```
console.log('今天好开心');
```

> 这是注意事项

## npm node package manager
- 安装node后会自带送一个npm
- 安装前端包 bower
- 安装后台包用 npm

## 切换源 nrm 
- 将下载的网址切换到珠峰
```
npm config set registry "http://172.18.0.199"
```
- 全局安装本地安装
- 起到切换源的作用
```
sudo npm install nrm -g
```

> 只在命令行下使用才加-g属性

## 显示所有源
```
nrm ls
```

## 使用源
```
nrm use taobao
```

## 添加珠峰源
```
nrm add feng http://172.18.0.199
```

## 删除存在的源
```
nrm del 源的名字
```

## 搭建博客(自动生成 hexo)
- 唯一性 一个github账号只能有一个
``` 
npm install hexo-cli -g
```
### 生成博客
```
mkdir jwTest && cd jwTest
hexo init
```

### 启动服务
```
hexo server -p 5000
```

> 生成博客的工具


