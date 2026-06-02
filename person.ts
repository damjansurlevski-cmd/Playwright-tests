
class Person{
    firstName:string
    lastName: string

    constructor(firstName:string, lastName:string){
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person1 = new Person("Dimitar", "Stojanovski")
console.log(person1.firstName)
const person2 = new Person("John", "Doe")
console.log(person2.lastName)
