#### 在[left,right]区间随机取一个整数
+ 数学推导 已知0<=x<1,L<=y<R 如何用x来表达y

由L<=y<R得到0<=y-L<R-L,在有0<=(y-L)/(R-L)<1
从而得到x=(y-L)/(R-L) y=x(R-L)+L
```js
  function(l,r){
    return Math.floor(Math.random()*(r+1-l)+l) 
  }

```