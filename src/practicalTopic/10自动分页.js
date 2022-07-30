const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]



function logout(arr, size,) {
  let maxPageNo = Math.ceil(arr.length / size)
  let index = 1
  return function () {
    const news = arr.slice((index - 1) * size, (index * size) < arr.length ? index * size : arr.length)
    index = (index === maxPageNo) ? 1 : ++index
    return news
  }
}
const test = [3, 6, 9]
const test1 = [2, 5, 8]

function testfn(test) {
  let i = 0
  while (i < test.length) {
    const output = logout(arr.slice(0, test[i]), 3)
    let j = 0
    while (j < 6) {
      console.log('1111111111111111111111', test[i], output())
      j++
    }
    i++
  }
}
testfn(test)
testfn(test1)