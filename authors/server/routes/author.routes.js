const AuthorController = require('../controllers/Author.controller');
module.exports = function(app) {
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.getAuthors);
    app.get('/api/authors/:id', AuthorController.oneAuthor);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.put('/api/authors/update/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor);
}