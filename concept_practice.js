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

// advanced use of class bank account example 


class BankAccount {
    constructor (account, accountName, balance, ){
        this.account = account,
        this.accountName = accountName,
        this.balance = balance
        this.transactions = []
    }

    Deposit(amount){
        if(amount>0){
          this.balance += amount
          console.log(`the deposit been added successfully the amount is${amount}, current balance:${this.balance}`)
          this.transactions.push({type:'deposit', amount:amount})
        }else {
            console.log('sorry this amount cannot be added into account!')
        }
    }
        withdrawing(amount){
            if (amount <this.balance && this.balance> 0 && amount >0 ){
                this.balance -=amount
                console.log(`withdrawing was successfull the amount withdrawn was${amount} current balance: ${this.balance}`)
          this.transactions.push({type:'withdraw', amount:amount})

            }else {
            console.log('sorry this amount cannot be withdrawn from account!')
                
            }
        }
    transactionList(){
        console.log(`account id: ${this.account}`)
        console.log(`account name: ${this.accountName}`)
        console.log('transactions history')
        this.transactions.forEach(transaction=>{
            console.log(` type: ${transaction.type} amount:${transaction.amount}`)
        })
    }
    }


const mybankAccount = new BankAccount(8649, 'hussein', 6400)

mybankAccount.Deposit(200)
mybankAccount.withdrawing(5000)
mybankAccount.transactionList()




// Class Properties and Methods
// Static Methods
// Getters and Setters
// Inheritance
// Method Overriding
// Private Fields and Methods (using # syntax)
// Using Classes in Modules