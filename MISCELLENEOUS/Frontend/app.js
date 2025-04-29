
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// arr.sayhello = () => {
//     console.log("hello!,I am arr");
// }

//# Factory Function 
// function Personmaker(name,age) {
//     const person = {
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     };
//     return person;
// }

// let p1 = Personmaker("aditya",34);  // even after this p1.talk iski alag copy bni and p2.talk iski alag copy bni h
// let p2 = Personmaker("aryan",45);

//# Constructor - does not return anything and start with capital letter
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){  // person prototype access by p1 and p2
//     console.log(`Hi,my name is ${this.name}`);
// }

// let p1 = new Person("aditya",25);  // instance = new object 
// let p2 = new Person("sumit",56);

//# Class in JS
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, My name is ${this.name}`);
//     }
// }

// let p1 = new Person("aditya",25);  // instance = new object 
// let p2 = new Person("sumit",56);

//# Inherence in JS
class Person{
    constructor(name,age){
        console.log("Person class constructor")
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
} 

class student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor");
        super(name,age); // parent class constructor is being called
        this.marks = marks;
    }
    
}


class Teacher extends Person{
    constructor(name,age,subject){
        console.log("Teacher class constructor");
        super(name,age); // parent class constructor is being called
        this.subject = subject;
    }
    
}

stu1 = new student("aditya",25,95);