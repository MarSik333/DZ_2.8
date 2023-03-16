



// Отримуємо доступ до елемента div
var editableDiv = document.getElementById('editable');

// Зберігаємо початковий текст
var originalText = editableDiv.innerHTML;

// Функція для перемикання між режимами редагування та перегляду тексту
function toggleEditable() {
    if (editableDiv.contentEditable === 'true') {
        // Зберігаємо відредагований текст
        var newText = editableDiv.innerHTML;
        // Замінюємо елемент textarea на елемент div
        var newDiv = document.createElement('div');
        newDiv.innerHTML = newText;
        editableDiv.parentNode.replaceChild(newDiv, editableDiv);
        // Вимикаємо поведінку за замовчуванням для Ctrl + S
        document.removeEventListener('keydown', handleKeydown);
    } else {
        // Замінюємо елемент div на елемент textarea
        var newTextarea = document.createElement('textarea');
        newTextarea.value = originalText;
        editableDiv.parentNode.replaceChild(newTextarea, editableDiv);
        // Включаємо режим редагування та вимикаємо поведінку за замовчуванням для Ctrl + E
        newTextarea.focus();
        newTextarea.addEventListener('blur', toggleEditable);
        document.addEventListener('keydown', handleKeydown);
    }
}

// Функція для обробки події натискання клавіші
function handleKeydown(event) {
    event.preventDefault();
    if (event.key === 'e' && event.ctrlKey) {
        event.preventDefault();
        toggleEditable();
    } else if (event.key === 's' && event.ctrlKey) {
        event.preventDefault();
        toggleEditable();
    }
}

// Додаємо обробник подій натискання клавіші
document.addEventListener('keydown', handleKeydown);





// Вимикаємо поведінку за замовчуванням для Ctrl + E та Ctrl + S



































function sortTable(param) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("my-table");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("li");
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        if (param === "age") {
          x = parseInt(rows[i].getElementsByTagName("span")[1].innerHTML);
          y = parseInt(rows[i + 1].getElementsByTagName("span")[1].innerHTML);
        } else if (param === "country") {
          x = rows[i].getElementsByTagName("span")[2].innerHTML.toLowerCase();
          y = rows[i + 1].getElementsByTagName("span")[2].innerHTML.toLowerCase();
        } else {
          x = rows[i].getElementsByTagName("span")[0].innerHTML.toLowerCase();
          y = rows[i + 1].getElementsByTagName("span")[0].innerHTML.toLowerCase();
        }
        if (x > y) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  