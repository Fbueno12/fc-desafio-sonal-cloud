import express from 'express';
import BookService from './services/book-service.js'

const app = express()
const bookService = new BookService()

app.use(express.json())

app.get("/", (_, res) => {
    return res.json(bookService.findAllBooks())
})

app.listen(8080, () => {
    console.log("listening to port 8080");
});