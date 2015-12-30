'use strict';

function login(req,res){
    var data = {
        title: '用户登录/注册',
        requireJS: ['users'],
    };
    res.render('blog/users',data);
}

module.exports = {
    login: login
}