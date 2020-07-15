var form = document.getElementById('addForm');
var itemList = document.getElementById('itemList')

form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    var newListItem = document.getElementById('itemList');

    li.innerHTML = newItem;
    li.appendChild(itemList);
}
