## 安装

```
yarn add @woodenfish/aliyun-sdk-node
```

## 这个轱辘做了什么

- 调用阿里云 api 的时候有基本的提示
- 不必填写 `apiVersion` 与 `endpoint`
- 不用给每个业务创建一个 `api` 实例 (pop-core 需要给每个业务 new 一个实例出来)

## 版权问题

实际构造请求的代码来自 [@alicloud/pop-core](https://www.npmjs.com/package/@alicloud/pop-core) ，这部分代码（即 `dist/index.js` ）的版权归原作者所有。

## 为什么会有这个轱辘

0. 阿里云的文档搜索很糟糕
7. 我想有一定的参数提示（在 ts 中，必填参数未填，至少在 IDE 中会有提示了）
7. `apiVersion` 和 `endponit` 我希望有个默认值

## 还存在的问题

返回值的提示目前是基于 `mock` 数据做的，导致有的接口没有返回值提示（阿里云的 mock 数据不完整），有的参数类型不对（阿里云的研发分不清 Number 和 String），有的参数没有，还没有注释。

```
Q: 有没有解决办法呢？
A: 有的，可以基于阿里云文档或者其他强类型语言的SDK来做。
Q: 为什么不做呢？
```

- 阿里云的文档并不是基于 Github 的那份构建（要么是阿里云的研发有个自己写的 Markdown render，要么那个 Edit on Github 只是个笑话），我需要爬取阿里云上渲染好的文档，这份文档在遇到嵌套（比如数组）的时候格式很奇怪，中英文还是不一致的（中文是在当前页面直接展开，英文是跳转到一个新的页面）。
- 基于其他语言的SDK，Java或者Go的SDK都有给出返回值类型，问题在 LSP 的文档就几个字 "请看源码"，太难了 :(

## 如何使用

参考 test 代码，其余的请 看 源 码 :)

## 示例
![instance demo](static/test.instance.gif)
