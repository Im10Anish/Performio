require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/users')

const app = express()

app.use(express.json())
app.use('/', userRoute)

// Connection to MongoDB, if connection is established then start server
mongoose
    .connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(
                `+++Backend server is running+++ at ${process.env.PORT}`
            )
        })
    })
    .catch((err) => {
        console.log(err)
    })
