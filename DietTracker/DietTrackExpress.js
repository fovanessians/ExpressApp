require('dotenv').config();
const app = express()
const cors = require('cors')
const mongoose = require("mongoose");
const mySecret = process.env['MONGO_URI']
mongoose.connect(mySecret, { dbName: 'DietExercise' }, { useNewUrlParser: true, useUnifiedTopology: true });

/*Mongoose Structure = Schema $\rightarrow$ Model $\rightarrow$ Document
project-root/
├── backend/
│   ├── models/        # Mongoose schemas (e.g., User.js)
│   ├── routes/        # Express routes handling MongoDB operations
│   └── server.js      # Express app with MongoDB connection
└── frontend/
    ├── src/
    │   └── App.js     # React components making API calls
    └── package.json 
*/

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
const newBreakfast = new breakfastCalories({ mealType: breakfast });

const lunchCalories = mongoose.model('Lunch', mealSchema);
const newLunch = new lunchCalories({ mealType: lunch });

const dinnerCalories = mongoose.model('Dinner', mealSchema);
const newDinner = new dinnerCalories({ mealType: dinner });

const snackCalories = mongoose.model('Snack', mealSchema);
const newSnack = new snackCalories({ mealType: snack });

// activity model***************************
const activitySchema = new mongoose.Schema({
    activityType: { type: String },
    calories: { type: Number }
});

const officeCalories = mongoose.model('Office Work', activitySchema);
const newOffice = new officeCalories({ activityType: office });

const manualCalories = mongoose.model('Manual Labor', activitySchema);
const newManual = new manualCalories({ activityType: manual });

const cookingCalories = mongoose.model('Cooking', activitySchema);
const newCooking = new cookingCalories({ activityType: cooking });

const walkingCalories = mongoose.model('Walking', activitySchema);
const newwalking = new walkingCalories({ activityType: walking });

const runningCalories = mongoose.model('Running', activitySchema);
const newRunning = new runningCalories({ activityType: running });

const gymCalories = mongoose.model('Gym', activitySchema);
const newGym = new gymCalories({ activityType: gym });

const sportsCalories = mongoose.model('Sports', activitySchema);
const newSports = new sportsCalories({ activityType: sports });

const outdoorCalories = mongoose.model('Outdoor', activitySchema);
const newOutdoor = new officeOutdoor({ activityType: outdoor });
//******************************************





//*******Save to database - breakfast*****
app.post('/api/breakfast', async (req, res) => {
  let mealType = req.body.id;
  let breakfastCalories = req.body.inputValueBreakfast;
    });
//**************************************


module.exports = router;
