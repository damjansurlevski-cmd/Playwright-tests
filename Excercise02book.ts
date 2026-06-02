import Book from "./Exercise02"

const book1 = new Book("Harry Potter", "J.K. Rowling")

book1.borrowBook()
book1.borrowBook()

book1.returnBook()
book1.returnBook()