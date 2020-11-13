const express = require('express')
require('dotenv').config()


// Initiate express
const app = express();
app.use(express.json())

// Get the Oath


app.listen(3000, console.log('server running on 3000!', process.env.GET_TOKEN))
