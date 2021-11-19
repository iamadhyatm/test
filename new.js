import {Person as people} from './module.js' //* syntax use as full import data of any file import *
 

console.log(people.myname)

//clases

class customer {
    constructor(windows, os){
        this.os = windows
        this.version = os;

    }

    osversion(){
        console.log(this.os +" "+ this.version)
    }

}

let newversion = new customer("linux" , "ubantu")

newversion.osversion();


class FileSystem extends customer{
    
    constructor(model, cpu,ram,os,windows){
        super(windows, os)
        this.model = model
        this.cpu = cpu
        this.ram = ram
    }

}

let mysystem = new FileSystem(2010, "intel", "4gb","ubanu", "rdhat")

console.log(mysystem)


//spred & rest(...) operator  use for spliting of array and object
//array
let list = [1,2,3,4]

let newlist =[...list , 8,9,10]

console.log(newlist)

//object
let example = {
    name : "adhyatm"
}

let name2 = {
    ...example,
    lastname: "jain",

}

console.log(name2)

// use in function to pass multiple argument

function friend (...all){
    console.log(all)
}

friend("dev", "ashish", "sandeep", "neraj")


//array destructing


let cars = ["audi", "bmw" ,"honda" ]

let [car1, car2, car3] = cars;
console.log(cars[0])
console.log(car1)  //resule will be audi


// object destructuring

const group= {

    a : "adii",
    b : " adyy"

}

console.log(group.a)

let {a , b } = group

console.log(a)// result will be adii


// map function usd for create a copy of array one by one  and you can changes apply

let array1 = [1,2,3,4]
 let array2 = array1.map(x=>x*2)

 console.log(array2) //result will be (4) [2, 4, 6, 8]

 let array3 = array1.filter(x=> x%2==0)

 console.log(array3)







