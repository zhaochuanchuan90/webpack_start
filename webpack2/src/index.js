/**
 * Created by zhaochuanchuan on 2018/7/5.
 */

// ES2015中的import和export语句已经被标准化。虽然大多数浏览器还无法支持它们，但是webpack却能够提供开箱即用般的支持。
// 事实上，webpack 在幕后会将代码“转译”，以便旧版本浏览器可以执行。
import _ from 'lodash'

import './style.css' // 加载css，使用css-loader、style-loader

import Icon from './img.jpg' // 加载图片，使用file-loader

import Data from './data.xml' // 加载数据

function component() {
  var element = document.createElement('div');

  // Loash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['hello', 'webpack'], ' ');

  element.classList.add('hello');

  // 将图片添加到我们现有的div
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon)

  console.log('Data', Data)

  return element;
}
document.body.appendChild(component());