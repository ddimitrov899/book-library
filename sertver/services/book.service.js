let books = [
    {
        id: 1,
        Title: 'Steve Jobs',
        Slug: 'steve-jobs',
        Thumbnail: "data:image/jpeg;base64,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",
        Description: 'The phenomenal bestseller about Apple co-founder Steve Jobs from the author of the acclaimed biographies of Benjamin Franklin and Albert Einstein.<br><br>Based on more than forty interviews with Jobs conducted over two years—as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues—Walter Isaacson set down the riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. Isaacson’s portrait touched hundreds of thousands of readers.<br> <br>At a time when America is seeking ways to sustain its innovative edge and when societies around the world are trying to build digital-age economies, Jobs still stands as the ultimate icon of inventiveness and applied imagination. He knew that the best way to create value in the twenty-first century was to connect creativity with technology. He built a company where leaps of the imagination were combined with remarkable feats of engineering.<br> <br>Although Jobs cooperated with the author, he asked for no control over what was written. He put nothing off-limits. He encouraged the people he knew to speak honestly. He himself spoke candidly about the people he worked with and competed against. His friends, foes, and colleagues offer an unvarnished view of the passions, perfectionism, obsessions, artistry, devilry, and compulsion for control that shaped Jobs’s approach to business, the innovative products that resulted, and his legacy.',
        Genre: ['Biography', 'Autobiography', 'Business'],
        Author: 'Walter Isaacson',
        Publisher: '2011'
    }
]

exports.find = (slug = '') => {
    if (!slug && books.length > 0) {
        return books
    } else if (slug && books.find(book => book.Slug === slug)) {
        return books.filter(book => book.Slug === slug)
    }
    return []
}

exports.add = (book) => {
    if (book.Title &&
        book.Slug &&
        book.Thumbnail &&
        book.Description &&
        book.Genre &&
        book.Author && !books.find(b => b.Slug === book.Slug)) {
        book.id = books.length + 1
        if (book.id % 2 === 0) {
            book.id += 1
        }
        books.push(book)
        return true
    }
    return false

}

exports.update = (book) => {
    if (book.id && books.find(b => b.id === book.id)) {
        books = books.filter(book => book.id !== Number(book.id))
        books.push(book)
        return true
    }
    return false
}

exports.remove = (id) => {
    if (id && books.find(book => book.id === Number(id))) {
        books = books.filter(book => book.id !== Number(id))
        return true
    }
    return false
}
