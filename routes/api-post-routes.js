const express = require('express');
const router = express.Router();
const {
    getPosts,
    getPost,
    savePost,
    getEditPost,
    editPost,
    deletePost
} = require("../controllers/api-post-controller");

router.get('/api/contacts', getPosts);
router.get('/api/contact/:id', getPost);
router.post('/api/post', savePost);
router.get('/api/edit/:id', getEditPost);
router.put('/api/edit/:id', editPost);
router.delete('/api/post/:id', deletePost);

module.exports = router;