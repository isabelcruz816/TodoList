// Post Todo
document.getElementById("postbtn").addEventListener("click", event => {
    event.preventDefault();
    const lista = document.getElementById('todoitems');
    const input = document.getElementById("textinput");

    if (input.value != '') {
        lista.innerHTML +=
            '<li>' +
            '<input type="checkbox" class="todoCheck">' + input.value +
            '</li>'
        input.value = '';
    }
});

// Clear All
document.getElementById('clearBtn').addEventListener('click', () => {
    const todoCheck = document.getElementsByClassName('todoCheck');
    [...todoCheck].forEach(item => { item.checked = false });
});

// Mark All
document.getElementById('markBtn').addEventListener('click', () => {
    let todoCheck = document.getElementsByClassName('todoCheck');
    [...todoCheck].forEach(item => { item.checked = true });
});

// Delete all
document.getElementById('deleteBtn').addEventListener('click', () => {
    const todoList = document.getElementById('todoitems');
    todoList.innerHTML = '';
});