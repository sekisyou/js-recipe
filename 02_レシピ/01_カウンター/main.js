const display = document.getElementById("display")
const plusButton = document.getElementById("button_plus_one")
const minusButton = document.getElementById("button_minus_one")
const mulitButton = document.getElementById("button_multiply_two")
const refresh = document.getElementById("refresh")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

minusButton.onclick = function () {
  count -= 1
  display.textContent = count
}

mulitButton.onclick = function () {
  count *= 2
  display.textContent = count
}

refresh.onclick = function () {
  count = 0
  display.textContent = count
}


