import express from 'express'
import bodyParser from 'body-parser'

import ChatRouter from './routes/chats'
import MessageRouter from './routes/messages'
import mongoose from 'mongoose'
import cowsay from 'cowsay'

mongoose.connect('mongodb://localhost:27017/gb').then(() => {
  console.log(cowsay.say({
    text : "Mongoose connected",
    e : "oO",
    T : "U "
}));
}).catch(error => console.log(error));

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/status', (req, res) => res.send('OK'))

app.use('/chats', ChatRouter)
app.use('/messages', MessageRouter)

app.listen(5555, () => console.log(`Server has been started to http://localhost:5555`))