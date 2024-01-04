import { isPrefixedValue } from 'css-in-js-utils';

var CROSS_FADE_REGEX = /cross-fade\(/g;
// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];

export default function crossFade(property, value) {
  if (typeof value === 'string' && !isPrefixedValue(value) && value.indexOf('cross-fade(') !== -1) {
    return prefixes.map(function (prefix) {
      return value.replace(CROSS_FADE_REGEX, prefix + 'cross-fade(');
    });
  }
}