class Book {
    title: string
    author: string
    isAvailable: boolean

    constructor(title: string, author: string) {
        this.title = title
        this.author = author
        this.isAvailable = true
    }

    borrowBook(): void {
        if (this.isAvailable) {
            console.log("The book was borrowed successfully.")
            this.isAvailable = false
        } else {
            console.log("The book is already taken.")
        }
    }

    returnBook(): void {
        if (!this.isAvailable) {
            this.isAvailable = true
            console.log("The book was returned successfully.")
        } else {
            console.log("The book is already there.")
        }
    }
}

export default Book