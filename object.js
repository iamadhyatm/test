console.log("adhtyatm")

let myobj = {
"key": "value",
"name": "myname"
}
console.log(myobj)


function Createemployee(firstname, lastname, age, gender){
var myobject = {}
myobject.firstname = firstname
myobject.lastname =lastname;
myobject.gender = gender;
myobject.age =age
return myobject;

}

let employee3 = Createemployee("sarvagy","jain",27,"M")
console.log(employee3)

//can write in other way


function Createemployee(firstname, lastname, age, gender){
    //var myobject = {}
   this.firstname = firstname
   this.lastname =lastname;
   this.gender = gender;
    this.age =age
    //return myobject;
    
    }
    
    let employee2 = new Createemployee("adhyatm","jain",27,"M")
    console.log(employee2)
