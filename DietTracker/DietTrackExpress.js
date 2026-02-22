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
    name: { type: String },
    calories: { type: Number }
});

const breakfastCalories = mongoose.model('Breakfast', mealModel);
const lunchCalories = mongoose.model('Lunch', mealModel);
const dinnerCalories = mongoose.model('Dinner', mealModel);
const snackCalories = mongoose.model('Snack', mealModel);

// activity model***************************
const activityModel = mongoose.model('activity',{
    type: { type: String },
    calories: { type: Number }
});

const officeCalories = mongoose.model('Office Work', activityModel);
const manualCalories = mongoose.model('Manual Labor', activityModel);
const cookingCalories = mongoose.model('Cooking', activityModel);
const walkingCalories = mongoose.model('Walking', activityModel);
const runningCalories = mongoose.model('Running', activityModel);
const gymCalories = mongoose.model('Gym', activityModel);
const sportsCalories = mongoose.model('Sports', activityModel);
const outdoorCalories = mongoose.model('Outdoor', activityModel);
//******************************************





//*******Save to username database*****
app.post('/api/users', async (req, res) => {
  let uname = req.body.username;
  
  let dataBaseUsers = new users({
      username: uname,
    });
//**************************************


module.exports = router;
