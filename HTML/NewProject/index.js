import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello World!</h1>
// `;

console.log(document.getElementById("app")); // the whole div is getting console logged
console.log(document.getElementsByClassName("myClass")); // the whole div is getting console logged

var existingDiv = document.getElementById("app");
var newElement = document.createElement("div");
newElement.innerHTML = "I AM THE NEW TEXT";
existingDiv.appendChild(newElement);

var existingPara = document.querySelector("p");
var buttonOne = document.getElementById("one"); // button with id as one

buttonOne.setAttribute("key1", "value1");
buttonOne

// existingPara.removeChild(buttonOne);

// existingPara.setAttribute("temp1", "value1"); // Overwrites any existing value for key

// console.log(existingPara);

/***
 * Document Object Model(DOM) - Model based on which you can manipulate elements of a webpage
 * i.e document object
 * Interface allows us to manipulate webpage - create, modify, or remove
 * document object - contains the content of a webpage i.e. all the nodes
 *
 *
 * DOM Manipulation Hands-On
 *
 *  Access || Get the Node Object whioch you want to manipulate
 *
 *      ID - document.getElementById() - Single Item
 *      ClassName - document.getElementsByClassName() - List of Items having same class
 *      TagName - document.getElementsByTagName() - List of Items for a particualar tag ex-h1, a, p
 *      QuerySelector - document.querySelector("<Quewry>")
 *                  Returns the 1st Match only!
 *                  CSS Selector Names Can be used as Queries to get items
 *              access items. e.g - *, h1, ., #,
 *      QuerySelectorAll - document.querySelectorAll()
 *                  Returns all matches
 *
 *
 *  Manipulate || Update the Properties as needed
 *
 *  Properties of HTML Nodes :
 *
 *      innerHTML --> JS Gets or Sets HTML Content in this property
 *      innerText --> JS Gets or Sets only Visible Text Content in this property
 *      textContent --> Contains all the text within a node
 *      style.<property> -> Can be overwritted to a new style value
 *                  e.g. - node.style.<property> = {CSS Style Value}
 *                          node.style.color = 'blue';
 *
 * Modifying Attributes :
 *      node.setAttribute()
 *      node.removeAttribute()
 *
 *      var newElement = document.createElement();
 *
 *      parentElement.appendChild(newElement)
 *      parentElement.removeChild(element)
 *
 * 
 * 
 * Events:
 * 
 * Actions which a browser can understand
 * To handle such events 
 */

const heading = document.querySelector("h1");
console.log(heading);
function changeColorToGreen() {
  heading.style.color = "green";
}
heading.addEventListener("mouseover", changeColorToGreen);
function backTodefault(){
    heading.style.color="white";
}
heading.addEventListener("mouseout",backTodefault);


const newButton=document.createElement('button');
newButton.textContent = 'click me';
const newHeading = document.createElement('h1');
newHeading.textContent = 'This is new heading';
document.body.appendChild(newButton);
document.body.appendChild(newHeading);
newButton.addEventListener('click',()=>{
    newHeading.style.display = newHeading.style.display === 'none' ? 'block' : 'none';
})

