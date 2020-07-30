export default function formatNumber(number, option) {
  // This function will format the number to a fixed number string. The decimal part should 2.
  // That means the number 2 will be formatted as '2.00'. The `option` is an object which contains
  // a `currency` property. If the property is `true`, a dollar sign will be added to the result.
  //
  // Your target:
  //
  // * Please implement the function and pass all the tests in format_number_spec.js.
  // * Please do NOT modify the signature of the function.

  let numberStr = number.toString();
  if (numberStr.indexOf('.') === -1) {
    numberStr += '.00';
  } else {
    // 小数点长度
    const numDecimal = numberStr.length - 1 - numberStr.indexOf('.');
    if (numDecimal === 1) {
      numberStr += '0';
    } else if (numDecimal > 2) {
      // eslint-disable-next-line no-param-reassign
      number = Math.round(number * (10 ** (numDecimal - 1))) / (10 ** (numDecimal - 1));
      numberStr = number.toString();
    }
  }
  if (option !== undefined) {
    return `$ ${numberStr}`;
  }
  return numberStr;
}
