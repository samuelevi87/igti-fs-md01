window.addEventListener('load', start);

var globalNames = ['One', 'Two', 'Three', 'Four'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start() {
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
    console.log(globalNames);
    render();
  }

  function updateName(newName) {
    globalNames[currentIndex] = newName;
    render();
  }

  function handleTyping(event) {
    // if (event.key === 'Enter' && event.target.value.trim() !== "") { Assim resolveria, mas não limparia os espaços no campo do input.
    
    var hasText = !!event.target.value && event.target.value.trim() !== '';
    if (!hasText) {
      clearInput();
      return;
    }
    if (event.key === 'Enter' && event.target.value.trim() !== "") {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
      }
      isEditing = false;
      render();
    }
  }


  inputName.focus();
  inputName.addEventListener('keyup', handleTyping);
}

function render() {
  function createDeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }
    var button = document.createElement('button');
    button.classList.add('deleteButton');
    button.textContent = 'x';
    button.addEventListener('click', deleteName);
    return button;
  }

  function createSpan(name, index) {
    function editName() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }

    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = currentName;
    span.addEventListener('click', editName);

    return span;
  }

  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';
  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

function clearInput() {
  inputName.value = '';
  inputName.focus();
}