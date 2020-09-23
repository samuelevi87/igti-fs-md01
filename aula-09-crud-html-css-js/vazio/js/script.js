window.addEventListener('load', start);

var globalNames = ['One', 'Two', 'Three', 'Four'];
var inputName = null;

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

  function handleTyping(event) {
    if (event.key === 'Enter') {
      insertName(event.target.value);
    }
  }

  inputName.focus();
  inputName.addEventListener('keyup', handleTyping);
}

function render() {
  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';
  var ul = document.createElement('ul');

  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    var li = document.createElement('li');
    li.textContent = currentName;
    ul.appendChild(li);
  }
    
  divNames.appendChild(ul);
  clearInput();
}

  function clearInput() {
    inputName.value = '';
    inputName.focus(); 
  }


// var ul = document.createElement('ul');
// var li1 = document.createElement('li');
// var li2 = document.createElement('li');

// li1.textContent = 'First';
// li2.textContent = 'Second';
// ul.appendChild(li1);
// ul.appendChild(li2);