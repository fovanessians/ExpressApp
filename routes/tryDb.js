const express = require('express');
const router = express.Router();
require('dotenv').config();
//const mongoose = require("mongoose");
//const mySecret = process.env['MONGO_URI']
//mongoose.connect(mySecret, { dbName: 'test' }, { useNewUrlParser: true, useUnifiedTopology: true });

let mongoose;
try {
  mongoose = require("mongoose");
  const mySecret = process.env['MONGO_URI']
  mongoose.connect(mySecret, { dbName: 'test' }, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (e) {
  console.log(e);
}

router.get("/is-mongoose-ok", function (req, res) {
  if (mongoose) {
    res.json({ isMongooseOk: !!mongoose.connection.readyState });
  } else {
    res.json({ isMongooseOk: false });
  }
});

// User model***************************
const Dev = mongoose.model('xper',{
    genre: { type: String },
    num: { type: Number }
});
  
const new_dev = new Dev({
    genre: 'Wizard',
    num:49
})
new_dev.save(new_dev)

function confirm() {
  console.log("saved");
}
function gnome(callback) {
  Dev.save({genre: 'Gnome', num:5});
  callback();
}

gnome(confirm);

router.get('/trySave', function (req, res) {
  res.json({ genre: new_dev.genre, num: new_dev.num });
});
//*****************************************

food = 'rice';
let findOneByFood = async (food) => {
  return console.log(await Persons.findOne({favoriteFoods: food}));
  };

module.exports = router;

