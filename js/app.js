const app = require('./app.js');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var oracledb = require('oracledb');
oracledb.autoCommit = true;

var shopRouter = require('./routes/index');
var shopRouter = require('./routes/cart');
var shopRouter = require('./routes/details');
var shopRouter = require('./routes/home');
var shopRouter = require('./routes/login');