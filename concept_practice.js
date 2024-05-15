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


// class MyClass {
//     constructor(param1, param2) {
//         this.property1 = param1;
//         this.property2 = param2;
//     }

//     myMethod() {
//         // Accessing instance properties
//         console.log(this.property1);
//     }
// }

// static classes 

// class MyStaticClass {
//     static myStaticMethod() {
//         console.log('This is a static method');
//     }
// }  
// MyStaticClass.myStaticMethod()



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

// getter and setter 
 
// class SetAndGetter {
//     constructor (){
//         this.value = 0
//     }
//     get(){
//         return this.value
//     }
//     set(value){
//         if(this.value >= 0){
//              this.value = value
//              console.log(`value set to this ${this.value}`)
//         }else {
//             console.log('cannot set negative number')
//         }
//     }
//    Increment(incrementValue = 1){
//     this.value += incrementValue
//     console.log(`value is incremented to this ${this.value}`)
//    }
//    Decrement(decrement=-1){
//         if(this.value-decrement>0){
//             this.value -= decrement
//             console.log(`value is decremented to this ${this.value}`)
//         }else {
//             console.log('cannot decrement into i negative value')
//         }
//    }
// }
// const newValues = new SetAndGetter()
// console.log(newValues.set(5)) 
// console.log(newValues.Increment(2)) 
// console.log(newValues.Decrement(2)) 
// console.log(newValues.get()) 

// advanced use of class bankacount

// class BankAccount {
//     constructor(accountNumber, accountUser, balance){
//         this.accountNumber = accountNumber,
//         this.accountUser = accountUser,
//         this.balance = balance
//          this.transactionHistory = []
//     }

//     deposit(amount){
//         if(amount >0){
//             this.balance += amount
//             console.log(`Deposit of ${amount} Successful, New amount ${this.balance}`)
//             this.transactionHistory.push({type:'deposit', amount:amount})
//         }else {
//             console.log('invalid deposit amount')
//         }
//     }
//     withdrawal(amount){
//         if(this.balance > amount && amount >0 ) {
//            const newBalance = this.balance - amount
//            console.log(`the withdrawal was i successful,'new balance:' ${newBalance}`)
//            this.transactionHistory.push({type:'withdraw', amount:amount})

//         }else {
//             console.log('your amount is cannot be withdrawn')
//         }
//     }
//     transitionList(){
//         console.log('your transition history:')
//         this.transactionHistory.map((transaction)=>{
//             console.log(`type:${transaction.type} , amount:${transaction.amount}`)
//         })
//     }


// }

// const ATM = new BankAccount('864864' ,'hussein sedoum', 2000)

// ATM.deposit(400)
// ATM.withdrawal(200)
// ATM.transitionList()
