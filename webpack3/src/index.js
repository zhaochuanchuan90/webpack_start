/**
 * Created by zhaochuanchuan on 2018/7/5.
 */
/**
 * 管理输出
 */

// ES2015中的import和export语句已经被标准化。虽然大多数浏览器还无法支持它们，但是webpack却能够提供开箱即用般的支持。
// 事实上，webpack 在幕后会将代码“转译”，以便旧版本浏览器可以执行。
import _ from 'lodash'

import printMe from './print'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn)

  return element;
}
document.body.appendChild(component());