import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import postRoutes from "./routes/posts.js";

const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://akelab:mipapamemima99@cluster0.2wq6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`server running on host ${PORT}`)))
.catch((error) => console.log(`${error} did nor connect`) )

mongoose.set('useFindAndModify', false)