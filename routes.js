const Router=require('express').Router()
const controller=require('./controllers/books')

Router.post('/books/addBook',controller.addBook)
Router.get('/books/getAll',controller.getAllBook)
Router.get('/books/getOne/:id',controller.getOneBook)
Router.put('/books/update/:id',controller.updateBook)
Router.delete('/books/delete/:id',controller.deleteBook)

module.exports=Router