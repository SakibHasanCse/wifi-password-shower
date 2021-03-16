const express = require('express')
const app = express()
const wifiPassword = require('wifi-password');

app.get('/', function(req, res) {
    wifiPassword().then(password => {
        console.log(password);
        return res.json({ 'password': password })
            //=> 'johndoesecretpassword'
    });

})

app.listen(3000)