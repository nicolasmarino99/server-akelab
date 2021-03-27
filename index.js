import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()

app.use(express.json({ limit: '30mb', extended: true}))
app.use(express.urlencoded({ limit: '30mb', extended: true}))

const CONNECTION_URL = 'mongodb+srv://akelab:mipapamemima99@cluster0.2wq6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`server running on host ${PORT}`)))