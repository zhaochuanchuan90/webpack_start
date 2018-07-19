/**
 * Created by zhaochuanchuan on 2018/7/5.
 */
/**
 * tree shaking: tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块系统中的静态结构特性，例如 import 和 export。
 */

// ES2015中的import和export语句已经被标准化。虽然大多数浏览器还无法支持它们，但是webpack却能够提供开箱即用般的支持。
// 事实上，webpack 在幕后会将代码“转译”，以便旧版本浏览器可以执行。
import _ from 'lodash'
import { cube } from './math'

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello Webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}
document.body.appendChild(component());