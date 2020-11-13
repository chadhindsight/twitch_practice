const express = require('express')
require('dotenv').config()
const request = require('request')

// Initiate express
const app = express();
app.use(express.json())

// Get the Oath
const getToken = (url, callback) => {
    const options = {
        url: process.env.GET_TOKEN,
        json: true,
        body: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'client_credentials'
        }
    }

    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err)
        }
        console.log(`Status: ${res.statusCode}`, body)
        callback(res)
    })
}

getToken(process.env.GET_TOKEN, (res) => {
    console.log(res.body)
})

app.listen(3000, console.log('server running on 3000!'))
