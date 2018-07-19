/**
 * Created by zhaochuanchuan on 2018/7/5.
 */
/**
 * 模块热替换
 */
// ES2015中的import和export语句已经被标准化。虽然大多数浏览器还无法支持它们，但是webpack却能够提供开箱即用般的支持。
// 事实上，webpack 在幕后会将代码“转译”，以便旧版本浏览器可以执行。
import _ from 'lodash'
import printMe from './print'
import './style.css'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn)

  return element;
}
// document.body.appendChild(component());
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}