const ul = document.querySelector('ul');
const input = document.getElementById('name');
const input2 = document.getElementById('age');

//let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

//let values = ['Mark', 'Jason', 'Todd', 'Yvonne', 'Jane', 'Sarah']
//itemsArray.push(values);


let itemsArray = ['Mark', 'Jason', 'Todd', 'Yvonne', 'Jane', 'Sarah'];
itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}


function add(){
    itemsArray.push(input.value);
    itemsArray.push(input2.value);
    if (input.value == "" || input2.value == "") {
        alert("Please enter a value");
    }
    else {
        localStorage.setItem('items', JSON.stringify(itemsArray));
        addTask(input.value);
        addTask(input2.value);
    }
  }


function del(){
    localStorage.clear();
    ul.innerHTML = '';
    itemsArray = [];
  }