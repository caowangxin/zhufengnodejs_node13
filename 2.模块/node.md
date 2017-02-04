## nrm源切换
## 如何安装包 和 卸载包
初始化一个pacakge.json文件，记录文件依赖
```
npm init -y
```
## 记录依赖
- 项目依赖
    - 上线的时候仍然需要 angular jquery
    ```
    npm install jquery --save(-S)
    ```
- 开发依赖
    - 上线时不需要 webpack
    ```
    npm install webpack --save-dev(-D)
    ```

## 安装使用的依赖
```
npm install 
```