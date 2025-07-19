const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function () {
  const text = inputElement.value
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  card.append(todo)
  container.append(card)

  inputElement.value = ""

  // 削除ボタン を作成
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタン を押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()
  }

  // 削除ボタン を card の中に追加する
  card.append(deleteButton)

  // card を container の中に追加する
}
