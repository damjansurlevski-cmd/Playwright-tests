class Product {
    private name: string
    private price: number
    private stock: number

    constructor(name: string, price: number, stock: number) {
        this.name = name
        this.price = price
        this.stock = stock
    }

    buy(quantity: number): void {
        if (quantity <= this.stock) {
            this.stock = this.stock - quantity
            console.log("Purchased!")
        } else {
            console.log("Not enough stock")
        }
    }

    restock(quantity: number): void {
        this.stock = this.stock + quantity
    }

    getInfo(): string {
        return this.name + " - Price: " + this.price + " - Stock: " + this.stock
    }
}

const product = new Product("Pen", 50, 8)

console.log(product.getInfo())
product.buy(2)
console.log(product.getInfo())
product.restock(4)
console.log(product.getInfo())