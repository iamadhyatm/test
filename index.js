// // store input numbers
// const num1 = parseInt(prompt('Enter the first number '));
// const num2 = parseInt(prompt('Enter the second number '));

// //add two numbers
// const sum = num1 + num2;

// // display the sum
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);

// take the input from the user
//  const a = 5;
//  result = Math.sqrt(a);
//  console.log(result);

//  write a program for area of circle
const array = ["adhyatm", "aagam", "akshay", "sarvagy", "titu", "sonu", "jitu", "mohit"]
// console.log(typeof(array))

// array.forEach(item=>{console.log(item)});

// let available = array.includes("adhyatm");
// console.log(available)

// // const arrfilter = array.filter(Item => array.slice(0,2))
// // console.log(arrfilter)
// let lastname = "jain"
// const jainadded = array.map(fullname)

// function fullname(item){return [(array.forEach(item=>console.log(item)))+lastname];}

// console.log(jainadded)
 

// const number = [12,14, 25, 54, 34]

// let largenum = number.some(num => num>=0)
// console.log(largenum)

// let smallnum = number.some(num=> num<=0)
// console.log(smallnum)

// export default number;
// export default largenum;


// let checkevery = number.every(num => num>=0)
// console.log(largenum)

// const collection = [5,6]

// let decending = collection.sort((a,b)=> a>b?1:-1)
// console.log(decending)

// let assending = collection.sort((a,b)=> a<b ?1:-1)
// console.log(assending)

// //change string and return into array

// myname = "adhyatm"

// let myarray = Array.from(myname)
// console.log(myarray)

// let person1 ={

// }
// console.log(person1)


// let person2 ={
// name:"adhyatm"
// }
// console.log(person2.hasOwnProperty("name")) // .hasOwnProperty to use check property in every ojet it inbuilt return boolean value for avaibility of property
 function creature(ls){
     this.lifespan =ls
 }

 creature.prototype.breath = function(){
     console.log(breathing)
 }
function person(first,last,age){
    this.firstname = first
    this.lastname = last
    this.age = age
}

person.prototype.fullname = function(){
    console.log(this.firstname + " "+ this.lastname);
}
//  person.prototype =Object.create(creature.prototype)// this code replace assign person type equal with creature type now person prototype remove 
 person.prototype.__proto__= Object.create(creature.prototype)


let creature1 = new creature(100)

let person1 = new person("sahil", "khan", 25);
let person2 = new person("adyy", "jain", 25);

// let person2 = new person("adhyatm", "jain" 25);
console.log(person1)
console.log(person2.breath)
console.log(creature1)
console.log(object)