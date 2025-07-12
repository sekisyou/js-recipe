// TRY: 練習問題 １
const plus = function (x) {
  return x + 1
}
// 関数名:
// 引数:
// 返り値:
console.log(plus(5))
// TRY: 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const f = function (n) {
  /*3n-2*/
  return 3 * n - 2
}
console.log(f(5))
// f2: 1, 10, 100, 1000, 10000, ...
const ff = function (n) {
  /* 10^(n-1) */
  return 10 ** (n - 1)
}
console.log(ff(5))

// f3: 2, 14, 107, 1010, 10013, ...

// TRY: 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。
const multiply = function (x, y) {
  /*掛け算*/
  return x * y
}
console.log(multiply(2, 5))
// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください。
const plusRound = function (x, y) {
  return Math.round(x + y)
}
console.log(plusRound(2.8, 5.4))
alert("Hello")
