/*let day="sunday";
switch(day){
    case "monday":
        case "tuesday":
            case "wednesday":
                case "thrusday":
                    case "friday":
                        console.log("weekdays");
                    break;
                        case "saturday":
                            case "sunday":
                                console.log("weekend");
                                break;
                                default:
                                    console.log("Invaild");
}*/
 /*let arr=["Peaky Blinders","Vikings","Money Heist"];
 arr.pop();
 arr.push("Breaking Bad");
 console.log(arr.join(", "));*/
/* let weekdays=['monday','tuesday','wednesday','thrusday','friday'];
 let weekend=['saturday','sunday'];
 let result=weekdays.concat(weekend);
 console.log(result.join(", "));
 let roll_no=[1,2,3,4,5,6,7];
 roll_no.splice(4,0,44);
 roll_no.splice(1,1);
 console.log(roll_no);*/
 /*let fruits=['apple','mango','grapes','kiwi'];
 
 console.log(fruits.slice(1,3));*/
/* let days='sun';
 switch(days){
    case 'mon':
        case 'tues':
            case 'wed':
                case 'thurs':
                    case 'fri':
                        console.log("WEEK-DAY");
                        break;
                        case 'sat':
                            case 'sun':
                                console.log("WEEK-END");
 }*/
/*let rank=[1,2,3,4];   //Array Destructuring
let [rank1,rank2,rank3,rank4]=rank;
console.log(rank1);
console.log(rank2);
console.log(rank3);
console.log(rank4);
let roll_no=[1,2,3,4,5,6,7];
let[a,b,c,d,e,f,g]=roll_no;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(g);*/
/*let animals=['dog','cat','pumba'];
let[shaggy,pussi,oscar]=animals;
console.log(shaggy);
console.log(pussi);
console.log(oscar);

let fruits=['apple','mango','grapes'];
let moreFruits=['pineapple','peach',...fruits];
console.log(moreFruits);
let male=['Leonardo DiCaprio','Robert Downey','Johnny Depp'];
let Both=['Natalie Portman','Scarlett Johansson',...male,'Katrina'];
console.log(Both);*/
/*let vege=['potato','carrot','brinjwal'];
for(let i=0; i<vege.length; i++){
    console.log(vege[i]);
}
for(let vegetables of vege){
    console.log(vegetables);
}

const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

for (const color of colors) {
    console.log(color);
}
let colrs=['red','yellow'];
for(let color of colrs){
    console.log(color);
}

let names=['sarthak','ria','ayush','suchi','garvit'];
names.forEach((n)=>console.log(n));*/
/*const vegetables = ['carrot', 'broccoli', 'spinach', 'potato', 'tomato'];

let index = 0;
while (index < vegetables.length) {
    console.log(`Index ${index}: ${vegetables[index]}`);
    index++;
}
const vegetabless = ['carrot', 'broccoli', 'spinach', 'potato', 'tomato'];

let i = 0;
do {
    console.log(`Index ${i}: ${vegetabless[i]}`);
    i++;
} while (i < vegetabless.length);
let numbers=[1,2,3,4,5];
let evenNum=numbers.filter((numbers)=>{return (numbers%2==0)});
console.log(evenNum);
let num=[1,2,3,4,5];
let oddNum=num.filter((num)=>{return num%2!=0});
console.log(oddNum);
let nums=[1,2,0,-2,-5,43];
let positiveNum=nums.filter((nums)=>{return nums>0});
console.log(positiveNum);
let nums=[1,2,3,4,5];
let sum=nums.reduce((accumulator,number)=>{
    console.log("Accumulator is "+ accumulator);
    console.log("Current number is "+ number);
    return accumulator+number;
},0)
console.log("SUM is " + sum);
let N=[1,2,3,44,55];
let SumOfNatural=N.reduce((accumulator, number)=>{
    console.log("Accumulator is "+ accumulator);
    console.log("Current number is "+ number);
    return accumulator+number;
})
console.log("Sum of natural numbers "+ SumOfNatural);

let number = [1 , 3 ,55 , 2 , 9 , 44 , 55];
let found = number.find((Element) => Element > 10);
console.log(found);
console.log(number.includes(number == 1));
console.log(number.indexOf(found));
let even = number.some((Element) => Element % 2 == 0);
console.log(even);
console.log(number.lastIndexOf(55));
console.log(number.lastIndexOf(33));


//Accessing Object property:

//1st way
let car = {
    color : "Black",
    type : "SUV",
    Engine : "BS-6",
    tyre : "MRF"
}
console.log(car);


//2nd Way
let newCar = new Object();
newCar.color = "Black";
newCar.type = "SUV";
newCar.Engine = "BS-6";
newCar.tyre = "MRF";
console.log(newCar);
console.log(newCar["color"]);

let bus ={
type:"Double-Decker",
color:"Red",
Engine:"BS_6",
gear:"6"
}
bus.seats="50";
bus["tickets"]="350";
console.log(bus);
console.log(bus["gear"]);


let student = {
    name : "sarthak",
    roll_no : 21,
    class : 12,
    section : "C"
}
console.log(student);
student["grades"] = {
    literature : "A",
    maths : "A"
}
console.log(student);
student.hobbies=["Dancing" , "Singing" , "Playing"];
console.log(student);
console.log(student.hobbies[2]);


let animals = ["Super" , "Bat" , "Spider"];
// map is a function of animals array which is iterative in nature 
// it provides some supplied logic -->  is part of callback function passed
let superHeroes = animals.map((animals) => { return animals + "-Man"});
console.log(superHeroes);
*/
/*
let student = {
    class : 4,
    roll_no : 21,
    section : "C"
}
student.grade = {
    literature : "A",
    Computer : "A",
    Maths : "A"
}

console.log(student);

student.hobbies = ["Cricket" , "Dancing" , "Singing"];
console.log(student);

let animals = ["Super" , "Bat" ,"Spider"];
let heroes = animals.map((animals) => animals + "Man");
console.log(heroes);

let numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ];
let sum=numbers.reduce((numbers) => {return numbers + sum});
console.log(sum)
*/
/*
let car = {
    color : "Black",
    type : "SUV",
    engineType : "Petrol",
    model : "BS-6"
}
console.log(car);

let car = {
    color : "red",
    start : function carEngine(){
        let color ="black";
        console.log("VROOM VROOM");
        console.log(`This is the new color ${this.color}`);
        console.log(color);
    }
    
}
console.log(car.color);
car.start();
*/
/*
let doExpress = function(){
    console.log("I Expressed something");
}
function doDeclare(){
    console.log("I declared something");
}
doExpress();
doDeclare();
*/
/*
let sumExpress = function(a,b){
    console.log(a+b);
}
sumExpress(11,3);
function sumDeclare(a,b){
    console.log(a+b);
}
sumDeclare(11,11);

console.log(x);
x = 24;
console.log(x);
var x= 100;
console.log(x);
let Express =function(){
    console.log("I am expressed")
}
Express();

hello();
function hello(){
    console.log("Hi I am here");
}


let obj1 = {
    hospital : "Government",
    noOfpatients : 110,
    medicalTeam : 3
}
obj1.newProp = {
    location : "Gurugram",
}
obj1.metho = function(){
    console.log("This is a method");
}
console.log(obj1);
obj1.metho();
obj1.another = function(){
    console.log("Aged by a year");
}
obj1.another();
*/
/*
 let dog = {
    Name : "oscar",
    age : 2,
    Breed : "Siberian-Husky"
 }
 dog.activity = {
    sound : "Bark",
 }
 console.log(dog);
 dog.color = function(){
    console.log("White");
 }
 dog.color();
 let book =
 const getSummary = book.getSummary
 */
/*
 class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Add an item to the cart
    addItem(item) {
      this.items.push(item);
    }
  
    // Remove an item from the cart
    removeItem(itemName) {
      this.items = this.items.filter(item => item.name !== itemName);
    }
  
    // Calculate the total price of all items in the cart
    calculateTotal() {
      return this.items.reduce((acc, item) => acc + item.price, 0);
    }
  }
  
  // Example usage:
  const cart = new ShoppingCart();
  
 // Add items to the cart
  cart.addItem({ name: 'Apple', price: 1.00 });
  cart.addItem({ name: 'Banana', price: 0.50 });
  cart.addItem({ name: 'Orange', price: 1.50 });
  
  // Calculate the total price
  const total = cart.calculateTotal();
  console.log(`Total: $${total.toFixed(2)}`);
  
  // Remove an item from the cart
  cart.removeItem('Banana');
  
  // Calculate the new total price
  const newTotal = cart.calculateTotal();
  console.log(`New Total: $${newTotal.toFixed(2)}`);
    
  const shoppingCart = {
    // Capacity to hold a bunch of Items | Property
    items: [], 

    // AddItem - Inserts into the items array
    addItem: function(itemName, price) { // Method/Behaviour 

        this.items.push({itemName, price}); // Added to the list | Inserted at End
        // {itemName, price} ==> {itemName: <ActualItemNameValue>, price: <ActualPriceValue>}
    },

    // RemoveItem - Filters Out the Supplied Item
    removeItem: function(itemName) {
        this.items = this.items.filter(currentItem => currentItem.itemName !== itemName);
    },

    // TotalPrice - Sums the prices of all items in the items[]
    calculateBill: function() {
        return this.items.reduce(((total, item) => total + item.price), 0);
    }
}
shoppingCart()

//Closure functions
function createClosureFunction()  // Is to create unique Closure Function(s)
{
        var numberOfClosureFunctionsCreated = 0;
        return function() {
            ++numberOfClosureFunctionsCreated;
            console.log(" Im the function being returned! My ID is : ", numberOfClosureFunctionsCreated);
    }
}
createClosureFunction();

*/
/*
let hello="Hello";
console.log(hello.toLowerCase()); //toLowerCase() is a method
console.log(hello.toLocaleUpperCase());// toUpperCase()is a method

console.log(hello.length);//.length is a property

let world="World";
console.log(hello.concat(world)); // .concat joins to strings as in arrays

console.log(hello.charAt(2));
console.log(world.charAt(5));

let str="Earth";
console.log(str.slice(-2));// .slice is used to slice the string


let str2=" Invisible ";
console.log(str2.trim());

let str3="Hello World";
console.log(str3.split(' '));

let strCharac="string";
let strNum=21;
console.log(strCharac+strNum);
*/

/*
// Fibonacci Series

function Fibonacci(n){
let a = 0;//Pos 1
let b = 1;//Pos 2
let c = 0;//Pos 3
let currentPos = 3;
while(currentPos<=n){
    c = a + b;
    a = b;
    b = c;
    ++currentPos;
}
return c;
}
Fibonacci(21);


function firstNonRepeatedChar(str) {
  
    //  * create a frequency map; where we find all the frequency for each character
    const charFreq = {}; // charFreq["Name of Field"] 
    for(let char of str) {
        charFreq[char] = (charFreq[char] || 0) + 1; // Language Specific || JS 
    }
     
    //  * Iterate over the string again and check if any character has frequency as 1. 
    //  *              If Yes; immediately return that particular character bcoz; it's was the first one
    for (let char of str) {
        if(charFreq[char] === 1) {
            return char
        }
    }
    return null;
    }



    function Sum(str){
        //return string Sum
        let sum = 0;
        for(let i=0; i<str.length; i++){
          sum+=parseInt(str[i]);
        }
        return sum;
      }
        */



      //DOM-Document Object Model
      //

/*
      // your code here
function divide(arr, n) {
    let currentSubArray=[];
    let currentSum = 0;
    let result = [];
    for (let item in arr) {
        if(currentSum + item <= n) {
                currentSubArray.push(item);
                currentSum += item;
        } else {
            result.push(currentSubArray);
            currentSubArray = [item];
            currentSum=item;
        }
        if(currentSubArray.length > 0) {
            result.push(currentSubArray);
        }
    }
    return result;
    }
    
    */