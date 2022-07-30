/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let top = num1.length - 1
    let bottom = num2.length - 1
    let str = ''
    let add = 0
    while (top >= 0 || bottom >= 0) {
        const l = top >= 0 ? num1.charAt(top--) - 0 : 0
        const r = bottom >= 0 ? num2.charAt(bottom--) - 0 : 0
        debugger
        str = (l + r + add) % 10 + str
        add = (l + r + add) >= 10 ? 1 : 0
    }
    return add ? add + str : str
};

console.log('sdsd', addStrings('1', '9'));