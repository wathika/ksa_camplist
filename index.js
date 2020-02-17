const express = require('express')
const app = express()
const mongoose = require('mongoose')

let db_url = "mongodb://someuser:abcd1234@ds131621.mlab.com:31621/beznet";

const mongoDb = process.env.DATABASE_URL || db_url;
mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to Database'));

app.use(express.json());

app.listen(3000, () => console.log('server started'));