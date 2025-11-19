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



//**** NEW SCHEMA -> NEW MODEL -> NEW INSTANCE FOR MONGOOSE**********


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


/*
const createAndSavePerson = (done) => {
  const firstMember = new Persons({
  name: 'Davids',
  age: 252,
  favoriteFoods: ["beans", "cake"],
  updateDate: 2020-05-11,
  newNumber: 'yes'   
})
};
*/

let firstMember = new Persons({
  name: 'Davids',
  age: 252,
  favoriteFoods: ["beans", "cake"],
  updateDate: 2020-05-11,
  newNumber: 'yes'   
})

firstMember.save(function(err, data) {
if (err) return console.error(err);
  //done(null, data)
  console.log(data);
});



console.log("Passed MongoDB save");

let arrayOfPeople = [{name: 'Dean', age: 15, favoriteFoods: ["rice"]}, {name: 'Katherine', age: 73, favoriteFoods: ["banana", "soup"]}];

/*
const createManyPeople = (arrayOfPeople, done) => {
  Persons.create(arrayOfPeople, function(err, data) {
  if (err) return console.error(err);
    done(null, data)
  });
};
*/

Persons.create(arrayOfPeople, function(err) {
if (err) return console.error(err);
  //done(null, data)
});


const findPeopleByName = (personName, done) => {
  Persons.find({ name: personName}, function(err, data) {
  if (err) return console.error(err);
    done(null, data)   
  });
};

food = 'rice';
let findOneByFood = async (food) => {
  return console.log(await Persons.findOne({favoriteFoods: food}));
  
};

console.log('-----findOneByFood-----');
console.log(findOneByFood('rice'));
console.log(findOneByFood.favoriteFoods);
console.log(findOneByFood.Persons);
console.log('-----findOneByFood-----');

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

/*
Thenable Class Example
class MyThenable {
  constructor(value) {
    this.value = value;
  }

  then(onFulfilled, onRejected) {
    // Simulate async resolution
    setTimeout(() => onFulfilled(this.value * 2), 1000);
  }
}

const result = await new MyThenable(5);
console.log(result); // 10 after 1 second

Use in Promise Chains
Promise.resolve(1)
  .then(result => {
    return {
      then: (resolve) => resolve(result * 3)
    };
  })
  .then(console.log); // 3
  */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Persons;
exports.firstMember = firstMember;
//exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
//exports.createManyPeople = createManyPeople;
exports.findOneByFood = findOneByFood;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
