const express = require('express');
const router = express.Router();
const createPath = require('../helpers/create-path');
const  {
    getMain,
    getAbout,
    createPost,
} = require('../controllers/contact-controller');

router.get('/', getMain);
router.get('/about', getAbout);
router.get('/post', createPost);

module.exports = router;
