const {
    getPosts,
    getPost,
    savePost,
    getEditPost,
    editPost,
    deletePost
} = require('../controllers/post-controller')


const express = require('express');
const router = express.Router();

router.get('/contacts', getPosts);
router.get('/contact/:id', getPost);
router.post('/post', savePost);
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.delete('/post/:id', deletePost);

module.exports = router;
