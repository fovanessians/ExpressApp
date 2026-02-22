require('dotenv').config();
const app = express()
const cors = require('cors')
const mongoose = require("mongoose");
const mySecret = process.env['MONGO_URI']
mongoose.connect(mySecret, { dbName: 'DietExercise' }, { useNewUrlParser: true, useUnifiedTopology: true });

//Mongoose Structure = Schema $\rightarrow$ Model $\rightarrow$ Document

/*
// User model***************************
const userNameSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number }
});
*/

// meal model***************************
const mealSchema = new mongoose.Schema({
    mealType: { type: String },
    calories: { type: Number }
});

const breakfastCalories = mongoose.model('Breakfast', mealSchema);
const lunchCalories = mongoose.model('Lunch', mealSchema);
const dinnerCalories = mongoose.model('Dinner', mealSchema);
const snackCalories = mongoose.model('Snack', mealSchema);

// activity model***************************
const activitySchema = mongoose.model('activity',{
    activityType: { type: String },
    calories: { type: Number }
});

const officeCalories = mongoose.model('Office Work', activitySchema);
const manualCalories = mongoose.model('Manual Labor', activitySchema);
const cookingCalories = mongoose.model('Cooking', activitySchema);
const walkingCalories = mongoose.model('Walking', activitySchema);
const runningCalories = mongoose.model('Running', activitySchema);
const gymCalories = mongoose.model('Gym', activitySchema);
const sportsCalories = mongoose.model('Sports', activitySchema);
const outdoorCalories = mongoose.model('Outdoor', activitySchema);
//******************************************





//*******Save to username database*****
app.post('/api/meals', async (req, res) => {
  let uname = req.body.username;
  
  let dataBaseUsers = new users({
      username: uname,
    });
//**************************************


module.exports = router;
