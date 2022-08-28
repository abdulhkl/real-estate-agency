const express = require('express')
const color = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000

// connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to Real Estate Agency" })
})

//routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/properties', require('./routes/propertyRoutes'))
app.use('/api/properties/rent', require('./routes/propertyRoutes'))
app.use('/api/properties/sale', require('./routes/propertyRoutes'))
app.use(errorHandler)

app.listen(PORT, () => { console.log("server started", 5000) })
