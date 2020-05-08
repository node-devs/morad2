const bookModel=require('../database/book.model')

class bookController{
    addBook(req, res) {
        const book=new bookModel(req.body).save()
        book.then((data) =>res.json({msg:'book aded',data}))
        book.catch((err) =>res.json({msg:'error adding book',err}))
    }
    getOneBook(req, res) {
        const id =req.params.id
        const book= bookModel.findOne({_id: id}).exec()
        book.then((data) =>res.json(data))
        book.catch((err) =>res.json(err))
    }
    getAllBook(req, res) {
        const books= bookModel.find().exec()
        books.then((data) =>res.json(data))
        books.catch((err) =>res.json(err))
    
    }
    updateBook(req, res) {
        const id =req.params.id
        const data=req.body
        const update=bookModel.findOneAndUpdate({_id: id},{$set:data})
        update.then(() =>res.send("updated"))
        update.catch((err) =>res.json({msg:'coldnot updated book',err}))

    }
    deleteBook(req, res) {
        const id =req.params.id
        const deletebook= bookModel.findOneAndRemove({_id: id}).exec()
        deletebook.then((data) =>res.send("deleted"))
        deletebook.catch((err) =>res.json({msg:'coldnot updated book',err}))
    }
}

module.exports=new bookController()