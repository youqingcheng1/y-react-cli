
###  CSS transition
 >transition和display 
 >动画没执行完直接display:none会没有动画效果
 >原因：动画还没执行完，直接被干掉
 transitionad()

### ReactDOM的三个基本方法
>react包是react的核心代码，react-dom则是React剥离出的涉及DOM操作的部分.

_react-dom主要包含三个API：findDOMNode、unmountComponentAtNode 和 render。_

render用于将React渲染的虚拟DOM渲染到浏览器DOM，一般在顶层组件使用。
findDOMNode用于获取真正的DOM元素，以便对DOM节点进行操作。
unmountComponentAtNode用于执行卸载操作，执行在componentWillUnmount之前。

>customize-cra提供了一组用于自定义利用react-app-rewired核心功能的Create React App v2配置, 可以通过config-overrides.js文件来对webpack配置进行扩展

 font:12px/1.5 "Microsoft YaHei";
 字体12px 行高1.5em