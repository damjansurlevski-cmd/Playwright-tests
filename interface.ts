interface Flyable {
    birdName:string;
    fly():void
}

class Bird implements Flyable{
    birdName: string;

    constructor(birdName:string){
        this.birdName = birdName 
    }

    fly():void {
        console.log(`${this.birdName} is flying`)
    }

    drinking():void{
        console.log(`${this.birdName} is drinking`)
    }
}

const bird = new Bird("Lastovica")
bird.fly()