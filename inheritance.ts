
class Animal {
    move():void{
        console.log("Moving")
    }
}


class Dog extends Animal {

    bark():void {
        console.log("Woof Woof!")
    }
}

class Cat extends Animal{
    meowing():void{
        console.log("Mjau mjau")
    }
}


const dog = new Dog()
dog.move()
dog.bark()
const cat = new Cat()
cat.move()
