const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")

const AC = document.getElementById("AC")
const M = document.getElementById("M")

const pulse = document.getElementById("pulse")
const minus = document.getElementById("minus")
const multi = document.getElementById("multi")
const cut = document.getElementById("cut")

const equ = document.getElementById("equ")

const zer = document.getElementById("0")
const one = document.getElementById("1")
const two = document.getElementById("2")
const thr = document.getElementById("3")
const fou = document.getElementById("4")
const fiv = document.getElementById("5")
const six = document.getElementById("6")
const sev = document.getElementById("7")
const eig = document.getElementById("8")
const nin = document.getElementById("9")

let count1 = 0
let count2 = 0

let count1_text = ""
let count2_text = ""

let calcount = 0

let cal_num = 0

zer.onclick = function () {
  if (calcount == 0 && count1 != 0) {
    count1 = 10 * count1 + 0
    count1_text = count1_text + "0"
    result1.textContent = count1_text
  } else if (calcount == 1) {
    count2 = 10 * count2 + 0
    count2_text = count2_text + "0"
    result1.textContent = count2_text
    result2.textContent = cal(count1, count2, cal_num)
  }
}

one.onclick = function () {
  if (calcount == 0) {
    count1 = 10 * count1 + 1
    count1_text = count1_text + "1"
    result1.textContent = count1_text
  } else {
    count2 = 10 * count2 + 1
    count2_text = count2_text + "1"
    result1.textContent = count2_text
    result2.textContent = cal(count1, count2, cal_num)
  }
}

two.onclick = function () {
  if (calcount == 0) {
    count1 = 10 * count1 + 2
    count1_text = count1_text + "2"
    result1.textContent = count1_text
  } else {
    count2 = 10 * count2 + 2
    count2_text = count2_text + "2"
    result1.textContent = count2_text
    result2.textContent = cal(count1, count2, cal_num)
  }
}

thr.onclick = function () {
  if (calcount == 0) {
    count1 = 10 * count1 + 3
    count1_text = count1_text + "3"
    result1.textContent = count1_text
  } else {
    count2 = 10 * count2 + 3
    count2_text = count2_text + "3"
    result1.textContent = count2_text
    result2.textContent = cal(count1, count2, cal_num)
  }
}

fou.onclick = function () {
  if (calcount == 0) {
    count1 = 10 * count1 + 4
    count1_text = count1_text + "4"
    result1.textContent = count1_text
  } else {
    count2 = 10 * count2 + 4
    count2_text = count2_text + "4"
    result1.textContent = count2_text
    result2.textContent = cal(count1, count2, cal_num)
  }
}

fiv.onclick = function () {
  if (calcount == 0) {
    count1 = 10 * count1 + 5
    count1_text = count1_text + "5"
    result1.textContent = count1_text
  } else {
    count2 = 10 * count2 + 5
    count2_text = count2_text + "5"
    result1.textContent = count2_text
    result2.textContent = cal(count1, count2, cal_num)
  }
}

six.onclick = function () {
  if (calcount == 0) {
    count1 = 10 * count1 + 6
    count1_text = count1_text + "6"
    result1.textContent = count1_text
  } else {
    count2 = 10 * count2 + 6
    count2_text = count2_text + "6"
    result1.textContent = count2_text
    result2.textContent = cal(count1, count2, cal_num)
  }
}

sev.onclick = function () {
  if (calcount == 0) {
    count1 = 10 * count1 + 7
    count1_text = count1_text + "7"
    result1.textContent = count1_text
  } else {
    count2 = 10 * count2 + 7
    count2_text = count2_text + "7"
    result1.textContent = count2_text
    result2.textContent = cal(count1, count2, cal_num)
  }
}

eig.onclick = function () {
  if (calcount == 0) {
    count1 = 10 * count1 + 8
    count1_text = count1_text + "8"
    result1.textContent = count1_text
  } else {
    count2 = 10 * count2 + 8
    count2_text = count2_text + "8"
    result1.textContent = count2_text
    result2.textContent = cal(count1, count2, cal_num)
  }
}

nin.onclick = function () {
  if (calcount == 0) {
    count1 = 10 * count1 + 9
    count1_text = count1_text + "9"
    result1.textContent = count1_text
  } else {
    count2 = 10 * count2 + 9
    count2_text = count2_text + "9"
    result1.textContent = count2_text
    result2.textContent = cal(count1, count2, cal_num)
  }
}

pulse.onclick = function () {
  if (calcount == 0) {
    count2_text = count1_text + "+"
    result1.textContent = count2_text
    calcount += 1
    cal_num = 1
  }
}

minus.onclick = function () {
  if (calcount == 0) {
    count2_text = count1_text + "-"
    result1.textContent = count2_text
    calcount += 1
    cal_num = 2
  }
}

multi.onclick = function () {
  if (calcount == 0) {
    count2_text = count1_text + "×"
    result1.textContent = count2_text
    calcount += 1
    cal_num = 3
  }
}

cut.onclick = function () {
  if (calcount == 0) {
    count2_text = count1_text + "÷"
    result1.textContent = count2_text
    calcount += 1
    cal_num = 4
  }
}

equ.onclick = function () {
  result1.textContent = cal(count1, count2, cal_num)
  result2.textContent = ""

  count1 = cal(count1, count2, cal_num)
  count2 = 0

  count1_text = String(count1)
  count2_text = ""

  calcount = 0

  cal_num = 0
}

AC.onclick = function () {
  result1.textContent = 0
  result2.textContent = ""

  count1 = 0
  count2 = 0

  count1_text = ""
  count2_text = ""

  calcount = 0

  cal_num = 0
}

M.onclick = function () {
  if (calcount == 0) {
    if (count1 != 0) {
      count1_text = String(count1).slice(0, -1)
      count1 = Number(count1_text)
      result1.textContent = count1_text
      if (count1_text == "") {
        result1.textContent = 0
      }
    }
  } else if (count2 == 0) {
    result1.textContent = count1_text
    calcount = 0
    cal_num = 0
  } else {
    count2 = Number(String(count2).slice(0, -1))
    count2_text = count2_text.slice(0, -1)
    result1.textContent = count2_text
    result2.textContent = cal(count1, count2, cal_num)
  }
}

const cal = function (count1, count2, cal_num) {
  if (cal_num == 1) {
    return count1 + count2
  } else if (cal_num == 2) {
    return count1 - count2
  } else if (cal_num == 3) {
    return count1 * count2
  } else if (cal_num == 4) {
    return count1 / count2
  }
}
