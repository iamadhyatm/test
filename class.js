// class person{
//     constructor(name, age ,){
// this.name = name ;
// this.age = age;
//     }

//     sayhi(){
//         console.log("hi")// function inside a class which automatiacally add in prototype
//     }

//     static hello(){
//         console.log('hello')
//     }
// }

// let person1 =new person("adhyatm", 27)
// person1.sayhi()
// person.hello()    // static function or method cant connect with object always called with class name
// console.log(person1)


//inheritance in class

// class emp{
//     constructor(n){
//         this.name =n
//         console.log("emp constructor called")
        
//     }
//     msg(){
//         console.log("hi...")
//     }
// }

// class manager extends emp{
//     constructor(p,d){
//         super(p)// super function called parent class consstructor
//         this.department =d
//     }
//     info(){
//         super.msg()// called parent class function
//         console.log(this.name + "is manager of "+ this.department)
//     }
// }
// let mng1 = new manager("viswajeet", "web development")

// console.log(mng1.info())

//public private property of class




// class emp{
//     #name ="";
//     constructor(n){
      
//         this.#name =n //private property denote by # and it is not called outside the class , this a
       
        
//     }
//     msg(){
//         console.log(this.#name)
//     }
//     #pubfun(){//private method
//         console.log(this.msg())
//     }
// }
 
// let emp1 = new emp('adhyatm')
// console.log(emp1.msg())

//mixin is use to use outside build method to use in class or giving extra power to class
// let usefulmethod ={
//     sayHi(){
//         console.log("hi")
//     },

//     saybye(){  

//         console.log("bye....");
//     }
// }


// class user{
//     constructor(naam){
//         this.name = naam
//     }
// }
// Object.assign(user.prototype, usefulmethod);// this syntax use to mixing object and property with class
// let user1 = new user("adhyatm")
// console.log(user1.sayHi())