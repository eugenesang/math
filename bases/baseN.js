/**
 * ## Convert number to base n
 * Maximum base for this function is 64
 *
 * @param {Number} number
 * @param {Number} base Integer
 * @returns {String}
 */
function toBaseN(number, base = 36) {
  if (base < 36) {
    return number.toString(base);
  }

  // Custom characters for bases greater than 36
  const customChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

  if (base > 64) {
    throw new Error("Base must be at most 64 for this function.");
  }

  let result = "";
  const absNumber = Math.abs(number);

  while (absNumber > 0) {
    const remainder = absNumber % base;
    result = customChars[remainder] + result;
    absNumber = Math.floor(absNumber / base);
  }

  return (number < 0 ? "-" : "") + result;
}
