const Post = require("../models/Posts");
const createPath = require('../helpers/create-path');

const handleError = (err, res) => {
    console.log(err);
    res.status(404).render(createPath('error'));
}

const getPosts = (req, res) => {
    const title = 'Contacts Page';

    Post.find()
        .sort({createdAt: -1})
        .then(posts => {
            //console.log(posts);
            res.render(createPath('contact'), {title, posts})
        }).catch(err => handleError(err, res));
}

const getPost = (req, res) => {
    const title = 'Item Page';

    console.log(req.params);
    let id = req.params.id;

    Post.findById(id)
        .then(post => {
            //console.log(post);
            res.render(createPath('item'), {title, post})
        }).catch(err => handleError(err, res));
}

const savePost = (req, res) => {
    let {title, author, text} = req.body;
    let post = new Post({title, author, text});

    post
        .save()
        .then(result => res.redirect('/contacts'))
        .catch(err => handleError(err, res));
}

const getEditPost = (req, res) => {
    const title = 'Edit Post';

    let id = req.params.id;

    Post.findById(id)
        .then(post => {
            //console.log(post);
            res.render(createPath('edit-item'), {title, post})
        }).catch(err => handleError(err, res));
}

const editPost = (req, res) => {
    let id = req.params.id;
    let post = req.body;

    Post.findByIdAndUpdate(id, post)
        .then(result => {
            res.redirect(`/contact/${id}`);
        }).catch(err => handleError(err, res));
}

const deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(result => {
            res.status(200)
                .set('Content-Type', 'application/json')
                .send({status:'success'});
        }).catch(err => handleError(err, res));
}

module.exports = {
    getPosts,
    getPost,
    savePost,
    getEditPost,
    editPost,
    deletePost
}