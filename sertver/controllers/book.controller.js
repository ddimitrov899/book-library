const {find, add, remove, update} = require('../services/book.service')

exports.getAllBooks = (req, res) => {
    const books = find();
    if(books) {
        return res.json({success: true, books: books})
    }

    return res.json({success: false, message: 'No books for this moment!'})
}

exports.getBook = (req, res) => {
    const books = find(req.params.bookSlug);
    if(books.length > 0) {
        return res.json({success: true, book: books[0]})
    }
    return res.json({success: false, message: 'This book is not in our library!'})
}

exports.addBook = (req, res) => {
    const reqBody = req.body
    if(add(reqBody)) {
        return res.json({success: true, message: 'Success create Book!'})
    }
    return res.json({success: true, message: 'This book is already in library!'})
}

exports.updateBook = (req, res) => {
    const reqBody = req.body
    if(update(reqBody)) {
        return res.json({success: true, message: 'Success update Book!'})
    }

    return res.json({success: true, message: 'This book not exist in library!'})
}

exports.removeBook = (req, res) => {
    const id = req.params.bookId
    if(remove(id)) {
        return res.json({success: true, message: 'Success remove Book!'})
    }
}
