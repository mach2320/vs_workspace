var express = require('express');
var router = express.Router();
var oracledb = require('oracledb');

const login = require('./login');
const product = require('./user/index.js');
const product = require('./user/details.js');
const product = require('./user/home.js');
const product = require('./user/login.js');
const product = require('./user/cart.js');
const { route } = require('./login');

router.use('/', (req, res, next)=>{
    if(req.url == '/' || req.url == '/login'){
        // console.log("세션 검사 하지않고 로그인페이지로");
        next();
    }else{
        if(req.session.user){
            // console.log("세션이 있다.");
            next();
        }else{
            // console.log("세션이 없다.");
            res.send("<script>alert('로그인이 필요합니다.'); location.href='/'<script>");
        }
    }
});

// 로그인
router.use('/',login);

// 회원
router.use('/user/product', product);
router.use('/user/home', home);

//관리자
router.use('/admin/main', adminMain);
moudule.exports = router;