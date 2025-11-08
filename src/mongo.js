require('dotenv').config();
const mongoose = require("mongoose");
const mySecret = process.env['MONGO_URI']
mongoose.connect(mySecret, { dbName: 'Person' }, { useNewUrlParser: true, useUnifiedTopology: true });



// User model***************************
const User = mongoose.model('names',{
    name: { type: String },
    age: { type: Number }
});
  
var new_user = new User({
    name: 'Frank',
    age:49
})
  
new_user.save(function(err,result){
    if (err){
        console.log(err);
    }
    else{
        console.log(result)
    }
})
//*****************************************

/*
const firstMember = new Persons({
  name: 'Davids',
  age: 252,
  favoriteFoods: ["beans", "cake"],
  updateDate: 2020-05-11,
  newNumber: 'yes'   
});
  firstMember.save(function(err, data) {
  if (err) return console.error(err);
  else return console.log(data);
    
  });
  */






let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String],
  updateDate: Date,
  newNumber: Boolean
});

let Persons = mongoose.model('Person', personSchema);

/*
const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};
*/



const createAndSavePerson = (done) => {
  const firstMember = new Persons({
  name: 'Davids',
  age: 252,
  favoriteFoods: ["beans", "cake"],
  updateDate: 2020-05-11,
  newNumber: 'yes'   
});
  firstMember.save(function(err, data) {
  if (err) return console.error(err);
    done(null, data)
    
    
  });
};

console.log("Passed MongoDB save");

let arrayOfPeople = [{name: 'Dean', age: 15, favoriteFoods: ["rice"]}, {name: 'Katherine', age: 73, favoriteFoods: ["banana", "soup"]}];

const createManyPeople = (arrayOfPeople, done) => {
  Persons.create(arrayOfPeople, function(err, data) {
  if (err) return console.error(err);
    done(null, data)
  });
};


const findPeopleByName = (personName, done) => {
  Persons.find({ name: personName}, function(err, data) {
  if (err) return console.error(err);
    done(null, data)   
  });
};

const findOneByFood = (food, done) => {
  Persons.findOne({favoriteFoods: food}, function(err, data) {
  if (err) return console.error(err);
    done(null, data)   
  });
};

const findPersonById = (personId, done) => {
  Persons.findById(personId, function(err, docs) {
  if (err) return console.error(err);
    done(null, docs)   
  });
};

//console.log(findPersonById);

const findEditThenSave = function(personId, done) {
  const foodToAdd = "hamburger";
  
  Persons.findById(personId, function(err, Persons) {
  if (err) return console.error(err);

  Persons.favoriteFoods.push(foodToAdd);

    Persons.save(function(err, savedPerson) {
  if (err) return console.error(err);
    done(null, savedPerson)
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Persons.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, function(err, newFindDocs) {
  if (err) return console.error(err);
    done(null, newFindDocs)   
  });
};

const removeById = (personId, done) => {
  Persons.findByIdAndRemove(personId, (err, findDelDocs) => {
    if (err) return console.error(err);
      done(null, findDelDocs)
    });
  };
 

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Persons.remove({name: nameToRemove}, (err, name) => {
    if (err) return console.error(err);
      done(null, name)
    });
  };
 

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Persons.find({favoriteFoods: foodToSearch}).sort({name:1}).limit(2).select({ age: 0 }).exec((err, name) => {
    if (err) return console.error(err);
      done(null, name)
    });
 };

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Persons;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
