const Post = require("../models/Posts");

const handleError = (err, res) => {
    res.status(500).send(err);
}

const getPosts = (req, res) => {

    Post.find()
        .sort({createdAt: -1})
        .then(posts => res.status(200).json(posts))
        .catch(err => handleError(err, res));
}

const getPost = (req, res) => {
    let id = req.params.id;

    Post.findById(id)
        .then(post => res.status(200).json(post))
        .catch(err => handleError(err, res));
}

const savePost = (req, res) => {
    let {title, author, text} = req.body;
    let post = new Post({title, author, text});

    post
        .save()
        .then(() => res.status(200))
        .catch(err => handleError(err, res));
}

const getEditPost = (req, res) => {
    let id = req.params.id;

    Post.findById(id)
        .then(post => res.status(200).json(post))
        .catch(err => handleError(err, res));
}

const editPost = (req, res) => {
    let id = req.params.id;
    let post = req.body;

    Post.findByIdAndUpdate(id, post)
        .then(() => res.status(200).json(id))
        .catch(err => handleError(err, res));
}

const deletePost = (req, res) => {
    let id = req.params.id;

    Post.findByIdAndDelete(id)
        .then(() => res.status(200).json(id))
        .catch(err => handleError(err, res));
}

module.exports = {
    getPosts,
    getPost,
    savePost,
    getEditPost,
    editPost,
    deletePost
}