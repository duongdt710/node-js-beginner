var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('combined'))

app.get('/',function(req, res) {
    return res.send('')
})

var jwd_login_now = '';

app.post('/api/login', function(req, res) {
    if (req.body.username == '012345A' && req.body.password == '123456') {
        jwd_login_now = '1234567890qwertyuiopasdfghjklzxcvbnm';
        res.send({jwd_token: jwd_login_now});
    } else {
        res.send('Login false')
    }
})

app.get('/api/account', function(req, res) {
    if (req.body.jwd_token === '1234567890qwertyuiopasdfghjklzxcvbnm') {
        res.send(
            {
                alias: 'Đỗ Thành Dương (Tổng giám đốc công ty CNTT)',
                id: 71096
            }
        )
    } else {
        res.send('Token is wrong or expired, please try again!')
    }
})

app.listen(3000, function() {
    console.log('Hello Duong den voi nodejs beginner');
})