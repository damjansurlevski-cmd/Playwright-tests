
class Methods {

    //Metodi koi ne vrakkat nikakva vrednost t.e vodis
    sayHello(): void{
        console.log("Hello world")
    }

    //Metodi koi ni vrakaat pdreden vrednost
    addTwoNumber(): number{
        return 5+10
    }

    addTwoNumbersWithParametrs(num1:number, num2:number):number{
        return num1+num2

    }

    //Metod 
    getName(name:string):string{
        return name
        
    }
}

const metod = new Methods()
//metod.sayHello()
//console.log(metod.addTwoNumber())
//metod.getName()
//let firstName = metod.getName()
//console.log(firstName)
console.log(metod.addTwoNumbersWithParametrs(10,20))
console.log(metod.addTwoNumbersWithParametrs(1,2))
console.log(metod.getName("Dimitar"))
console.log(metod.getName("Keti"))