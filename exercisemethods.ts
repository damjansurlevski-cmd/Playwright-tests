class MethodsClass {

    findSmallestNumber(num1: number, num2: number, num3: number): number {
        let smallest = num1

        if (num2 < smallest) {
            smallest = num2
        }

        if (num3 < smallest) {
            smallest = num3
        }

        return smallest
    }
}

const method = new MethodsClass()

console.log(method.findSmallestNumber(10, 4, 7))