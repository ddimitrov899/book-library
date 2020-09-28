const express = require('express')

const router = express.Router()
const  {getAllBooks, getBook, addBook, updateBook, removeBook} = require('../controllers/book.controller')
router.get('/books', getAllBooks)
router.get('/:bookSlug', getBook)
router.post('/create', addBook)
router.put('/update/:bookId', updateBook)
router.delete('/:bookId', removeBook)

module.exports = router
