//回溯算法
var permute = function (nums) {
    const newArr = []
    function listArr(index, arr) {
        if (index === arr.length) {
            newArr.push([...arr])
            return
        }
        for (let i = index; i < arr.length; i++) {
            [arr[index], arr[i]] = [arr[i], arr[index]]
            listArr(index + 1, arr)
            [arr[index], arr[i]] = [arr[i], arr[index]]
        }
    }
    listArr(0, nums)
    return newArr
};

console.log(permute([1, 2]));