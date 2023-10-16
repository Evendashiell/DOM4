var itemsList = document.querySelector('#items');

// parentElement
console.log(itemsList.parentElement);
itemsList.parentElement.style.backgroundColor = 'grey';

// lastelementchild
console.log(itemsList.lastElementChild);
itemsList.lastElementChild.textContent = 'Hello 4';

// lastchild
console.log(itemsList.lastChild);

// createchild



// firstelementchild
console.log(itemsList.firstElementChild);
itemsList.firstElementChild.textContent = 'Hello 1';

// firstchild
console.log(itemsList.firstChild);

// nextsibling
console.log(itemsList.nextSibling);

// nextelementsibling
console.log(itemsList.nextElementSibling);

// previoussibling
console.log(itemsList.previousSibling);

// previouselementsibling
console.log(itemsList.previousElementSibling);
itemsList.previousElementSibling.style.color = 'red';

// createelement
var newDiv = document.createElement('div');
newDiv.className = 'Hello';
newDiv.id = 'Hello1';

// setAttribute
newDiv.setAttribute('tittle', 'Hello');

// createtesxtnode
var newDivText = document.createTextNode('Hello World');

// appendchild
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '40px';
container.insertBefore(newDiv, h1);

var newLi = document.createElement('li');
newLi.className = 'L';
// newDiv.id = 'Hello1';
var newLiText = document.createTextNode('Hello World');
newLi.appendChild(newLiText);


var list = document.querySelector('li .list-group-item');
newLi.style.fontSize = '10px';
item.insertBefore(newLi, list);

