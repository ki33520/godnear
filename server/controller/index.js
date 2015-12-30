'use strict';

function index(req,res){
    var data = {
        title: 'Home',
        requireJS: ['index'],
    };
    res.render('blog/index',data);
}

module.exports = {
    index: index
}