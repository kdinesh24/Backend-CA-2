const express = require('express')
const dotenv = require('dotenv')
const users = require('./data')

const app = express()
const PORT = 3000;


app.use(express.json())

app.get('/user', (req, res) => {
    const {username} = req.query;

    if (!username) {
        return res.status(400).json({message: "User parameter cannot be empty"})
    }

    const user = user.find(u => u.username.toLowerCase() === username.toLowerCase())

    if (user) {
        return res.json({ message: "User found", data: user })
    } else {
        return res.status(404).json({ message: "User not found"})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

