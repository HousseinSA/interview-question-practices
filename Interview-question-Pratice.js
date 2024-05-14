// console.log('hello')
// class Person{
//     constructor(name, age){
//         this.name = name, 
//         this.age= age
//     }


//     // method
//     introduce(){
//         console.log('hello my name is ' + this.name + ' and my age is ' + this.age)
//     }
// }

// const person  = new Person('hussein', 27)
// person.introduce()

// more about classes 


class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // Accessing instance properties
        console.log(this.property1);
    }
}

// static classes 

class MyStaticClass {
    static myStaticMethod() {
        console.log('This is a static method');
    }
}  
MyStaticClass.myStaticMethod()



// inheritance classes

// class Animal {
//     speak(){
//         console.log('animals can speak!')
//     }
// }

// class Cat extends Animal {
//     meow(){
//         console.log('Cats meows!')
//     }
// }

// const noveTheCat  = new Cat()

// noveTheCat.speak()
// noveTheCat.meow()

// // getter and setter 
 

// class Getset {
//     constructor(){
//         this.value   = 0
//     }

//     get(){
//         return this.value   
//     }

//     set(newValue){
//         if(this._newValue >0){
//             this.value   = newValue
//         }else {
//             console.log('will no assign a negative number!')
//         }
        
//     }
// }
// Getset.value = 5 
// console.log(Getset.value)