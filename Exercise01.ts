
class Player {
    private name: string
    private scores: number[]

    constructor(name: string) {
        this.name = name
        this.scores = []
    }

    addScore(score: number): void {
        this.scores.push(score)
    }

    getTotal(): number {
        let sum = 0

        for (let i = 0; i < this.scores.length; i++) {
            sum = sum + this.scores[i]
        }

        return sum
    }

    getResult(): string {
        if (this.getTotal() >= 100) {
            return "Winner"
        }

        return "Try again"
    }

    getName(): string {
        return this.name
    }
}

const player1 = new Player("Damjan")

player1.addScore(50)
player1.addScore(45)
player1.addScore(35)

console.log(player1.getName())
console.log(player1.getTotal())
console.log(player1.getResult())

