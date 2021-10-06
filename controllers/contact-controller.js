const createPath = require('../helpers/create-path');

const getMain = (req, res) => {
    const title = 'Main Page';

    res.render(createPath('index'), {title});
}

const getAbout = (req, res) => {
    res.redirect('/');
}

const createPost = (req, res) => {
    const title = 'Post Page';

    res.render(createPath('post'), {title});
}

module.exports = {
    getMain,
    getAbout,
    createPost,
}