
export class Car{
    brand: string;
    speed: number;
    model: string;

    constructor(brand:string, speed:number, model:string){
        this.brand = brand;
        this.speed = speed;
        this.model = model;
    }

    drive():void{
        console.log(this.brand + "" + "is driving")
    }

    break():void{
        console.log(`${this.model} is breaking`)
    }

   accelerate():void{
        console.log(`Car is accelerating with ${this.speed}`)
    }

    static changingGear():void{
        console.log("Car is changing gear")
    }

}

const germanCar = new Car("Audi", 150,"A5")
germanCar.drive()
germanCar.accelerate()
germanCar.break()
const japaneseCar = new Car("Toyota", 100, "Argo")
japaneseCar.break()

const italianCar = new Car("Alfa", 80, "Julieta")
console.log(italianCar.brand)

Car.changingGear()
