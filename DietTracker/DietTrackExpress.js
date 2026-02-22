require('dotenv').config();
const app = express()
const cors = require('cors')
const mongoose = require("mongoose");
const mySecret = process.env['MONGO_URI']
mongoose.connect(mySecret, { dbName: 'DietExercise' }, { useNewUrlParser: true, useUnifiedTopology: true });



// User model***************************
const UserName = mongoose.model('names',{
    name: { type: String },
    age: { type: Number }
});

// meal model***************************
const mealModel = mongoose.model('meal',{
    type: { type: String },
    calories: { type: Number }
});

// activity model***************************
const activityModel = mongoose.model('activity',{
    type: { type: String },
    calories: { type: Number }
});
//******************************************

//*******Save to username database*****
app.post('/api/users', async (req, res) => {
  let uname = req.body.username;
  
  let dataBaseUsers = new users({
      username: uname,
    });
//**************************************


module.exports = router;
