var headerTitle = document.getElementById('header-title');
// headerTitle.textContent='tanu';

headerTitle.innerText='Hello Word';

//question 1


var itemlist=document.querySelector('#items');
//parentElement

console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='pink';
console.log(itemlist.parentElement.parentElement.parentElement);

//lastelementchild

console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='Hello 4';

//lastchild

console.log(itemlist.lastChild);

//createchild

console.log(itemlist.createChild);
//firstelementchild

console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='Hello';

//firstchild

console.log(itemlist.firstChild);

//nextsibling

console.log(itemlist.nextSibling);

//nextelementsibling

console.log(itemlist.nextElementSibling);

//previoussibling

console.log(itemlist.previousSibling);

//previouselementsibling

console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='yellow';


//createelement

// create a Div
 var newDiv = document.createElement;

 console.log(newDiv);

 //Add class

 newDiv.className ='hello';
console.log(newDiv.className);

//add id 

newDiv.id ='hello1';
console.log(newDiv.id);


//createtextnode

var newDivText = document.createTextNode('hello world');
console.log(newDivText);


 //appendchild

// newDiv.appendchild('newDivText');

// console.log(newDiv)
//setAttribute


//  newDiv.setAttribute('title','tata Div');
//  console.log(newDiv);
 
