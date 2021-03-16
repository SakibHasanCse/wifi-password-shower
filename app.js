const express = require('express')
const app = express()
const wifiPassword = require('wifi-password');

// Get current wifi password

app.get('/', function(req, res) {
    wifiPassword().then(password => {
        console.log(password);
        return res.json({ 'success': `Your Wifi Password is : ${password}` })
            //=> 'johndoesecretpassword'
    }).catch(err => {
        return res.json({ 'error': 'Access denied , try agine with your username and password' })

    })

})

app.listen(3000, () => {
    console.log('listening on port 3000')
})