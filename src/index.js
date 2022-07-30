const fn1 = async (ctx, next) => {
  console.log('fn1 start');
  await next()
  console.log('fn1 end');
}

const fn2 = async (ctx, next) => {
  console.log('fn2 start');
  await next()
  console.log('fn2 end');
}

function compose(fn1, fn2) {
  return (ctx) => {
    return fn1(ctx, () => fn2(ctx, () => { }))
  }
}

function compose2(...arr) {
  return (ctx) => {
    function dispatch(i) {
      if (i === arr.length) return Promise.resolve(null)
      return Promise.resolve(arr[i](ctx, () => {
        return dispatch(++i)
      }))
    }
    return dispatch(0)
  }
}

compose2(fn1, fn2)({})