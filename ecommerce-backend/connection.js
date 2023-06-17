require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://${process.env.mongo_Usr}:${process.env.mongo_pwd}@cluster0.ao4utho.mongodb.net/furniture_website?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})

