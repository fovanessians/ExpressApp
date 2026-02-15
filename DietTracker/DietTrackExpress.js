require('dotenv').config();
const mongoose = require("mongoose");
const mySecret = process.env['MONGO_URI']
mongoose.connect(mySecret, { dbName: 'Person' }, { useNewUrlParser: true, useUnifiedTopology: true });



// User model***************************
const User = mongoose.model('names',{
    name: { type: String },
    age: { type: Number }
});
