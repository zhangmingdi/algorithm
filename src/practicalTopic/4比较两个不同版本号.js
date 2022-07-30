/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const arr1 = version1.split('.')
    const arr2 = version2.split('.')

    let i = 0
    while (i < arr1.length || i < arr2.length) {
        let n1 = 0
        let n2 = 0
        debugger
        if (arr1[i] !== undefined) {
            n1 = parseInt(arr1[i])
        }

        if (arr2[i] !== undefined) {
            n2 = parseInt(arr2[i])
        }
        debugger
        if (n1 > n2) return 1
        if (n1 < n2) return -1
        i++
    }
    return 0
};

console.log(compareVersion('1.01', '1'));