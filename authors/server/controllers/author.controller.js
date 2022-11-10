
const Author = require('../models/author.model')


module.exports.index = (req, res) => {
    res.json({
        message: "Hello world!"
    });
}


//Create One
module.exports.createAuthor = (req, res) => {
    const newAuthor = req.body;
    Author.create(newAuthor)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

//Get All 
module.exports.getAuthors = (req, res) => {
    Author.find().collation({locale: "en"}).sort({name: "asc"})
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

//Get One
module.exports.oneAuthor = (req,res) => {
    const idFromParams = req.params.id
    Author.findOne({_id: idFromParams})
        .then(oneAuthor => res.json({Author: oneAuthor}))
        .catch(err => res.json(err));
}

//Update
module.exports.updateAuthor =  (req, res) => {
    const idFromParams = req.params.id;
    Author.findOneAndUpdate(
        {_id: idFromParams},
        req.body,
        {new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

//Delete
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}