require('dotenv').config()
const express = require('express')
const app = express()
const PORT =  3500

const mongoose = require('mongoose')

const userRouter = require('./routes/userRoute')
const adminRouter = require('./routes/adminRoute')

app.use(express.json())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully!'))

app.use('/api/v1/admin/vaccine',adminRouter)
app.use('/api/v1/users/vaccine',userRouter)

app.listen(PORT,
    console.log(`Server started running on http://localhost:${PORT}`))