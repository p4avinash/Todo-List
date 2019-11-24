var button = document.getElementById("submitId");
var input = document.getElementById("inputId");
var oList = document.getElementById("olListId");

let items = JSON.parse(localStorage.getItem("Shopping"));
items == null ? (items = []) : items;

function saveItems() {
  if (input.value != null && input.value.length > 0) {
    items.push(input.value);
    localStorage.setItem("Shopping", JSON.stringify(items));
    window.location.reload();
  }
}

function deletes({ srcElement }) {
  items.splice(srcElement.accessKey, 1);
  localStorage.setItem("Shopping", JSON.stringify(items));
  window.location.reload();
}

function display() {
  for (var i = 0; i < items.length; i++) {
    var elements = items[i];
    var list = document.createElement("li");
    list.id = "dynamicList";
    list.appendChild(document.createTextNode(elements));
    var delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("Delete"));
    delButton.id = "delButtonId";
    delButton.accessKey = i;
    delButton.addEventListener("click", deletes);
    list.appendChild(delButton);
    oList.appendChild(list);
  }
}

button.addEventListener("click", saveItems);
display();

input.addEventListener("keypress", event => {
  if (event.keyCode === 13) {
    saveItems();
  }
});
