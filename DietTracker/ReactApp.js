//import React from 'https://esm.sh/react@18.2.0'
//import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
//import { useState } from "https://esm.sh/react";
//import ReactDOM from "https://esm.sh/react-dom/client";
//import React, { useState } from "https://esm.sh/react";

import React, { useState } from "react";  
import ReactDOM from "https://esm.sh/react-dom/client";
import "./ReactAppCSS.css";

/*
const openButtonBreakfast = document.querySelector('#buttonBreakfast');

openButtonBreakfast.addEventListener('click', () => {
 document.querySelector("#dialogBreakfast").showModal();
});
  <article
    id="electric-cars"
    data-columns="3"
    data-index-number="12314"
    data-parent="cars">
    <!-- Electric car content -->
  </article>
const article = document.querySelector("#electric-cars");


// Find all elements with a data-columns attribute
const articles = document.querySelectorAll("[data-columns]");

// Find all elements with data-columns="3"
const threeColumnArticles = document.querySelectorAll('[data-columns="3"]');
*/


/*
let tryMeal = 'Breakfast';
console.log(tryMeal);
console.log(`button${tryMeal}`);
console.log(typeof(`button${tryMeal}`));

document.querySelector(`#button${tryMeal}`).addEventListener('click', () => {
 document.querySelector(`#dialog${tryMeal}`).showModal();
});
*/

/*----Meals---*/

class modal {
  constructor(meal) {
    this.meal = meal;
  }
  
  openModal() {
    console.log(`invoke modal ${this.meal}`);
    document.querySelector(`#button${this.meal}`).addEventListener('click', () => { document.querySelector(`#dialog${this.meal}`).showModal();});
   }
  
  message(){
    console.log('message');
  }
}

let breakfast = new modal("Breakfast");
breakfast.message();
breakfast.openModal();

let lunch = new modal("Lunch");
lunch.message();
lunch.openModal();

let dinner = new modal("Dinner");
dinner.message();
dinner.openModal();

let snacks = new modal("Snacks");
snacks.message();
snacks.openModal();

/*-----Activity----*/

class modalAct {
  constructor(activity) {
    this.activity = activity;
  }
  
  openModal() {
    console.log(`invoke modalAct ${this.activity}`);
    document.querySelector(`#button${this.activity}`).addEventListener('click', () => { document.querySelector(`#dialog${this.activity}`).showModal();});
   }
  
  message(){
    console.log('message');
  }
}

let officeWork = new modalAct("OfficeWork");
officeWork.message();
officeWork.openModal();

let manualLabor = new modalAct("ManualLabor");
manualLabor.message();
manualLabor.openModal();

let cooking = new modalAct("Cooking");
cooking.message();
cooking.openModal();

let walking = new modalAct("Walking");
walking.message();
walking.openModal();

let running = new modalAct("Running");
running.message();
running.openModal();

let gym = new modalAct("Gym");
gym.message();
gym.openModal();

let sports = new modalAct("Sports");
sports.message();
sports.openModal();

let outdoor = new modalAct("Outdoor");
outdoor.message();
outdoor.openModal();


/*---------React Personal Information---------*/

const Calories = () => <a href="https://codepen.io/fovanessians-the-selector/pen/ByoQpae"><h1 class="melting-text">Personal Information</h1></a>
      
const animationRoot = ReactDOM.createRoot(document.getElementById('calories-database'));
animationRoot.render(<Calories />);

/*---------React Breakfast Meal Dialog---------*/
function BreakfastCalories(props) {
  const [inputValueBreakfast, setInputValueBreakfast] = useState(0);

  const handleChange = (event) => {
    setInputValueBreakfast(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueBreakfast}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueBreakfast}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootBreakfast = ReactDOM.createRoot(document.getElementById('breakfast-calories'));
rootBreakfast.render(<BreakfastCalories />);

/*---------React Lunch Meal Dialog---------*/
function LunchCalories(props) {
  const [inputValueLunch, setInputValueLunch] = useState(0);

  const handleChange = (event) => {
    setInputValueLunch(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueLunch}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueLunch}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootLunch = ReactDOM.createRoot(document.getElementById('lunch-calories'));
rootLunch.render(<LunchCalories />);

/*---------React Dinner Meal Dialog---------*/
function DinnerCalories(props) {
  const [inputValueDinner, setInputValueDinner] = useState(0);

  const handleChange = (event) => {
    setInputValueDinner(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueDinner}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueDinner}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootDinner = ReactDOM.createRoot(document.getElementById('dinner-calories'));
rootDinner.render(<DinnerCalories />);

/*---------React Snacks Dialog---------*/
function SnacksCalories(props) {
  const [inputValueSnacks, setInputValueSnacks] = useState(0);

  const handleChange = (event) => {
    setInputValueSnacks(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueSnacks}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueSnacks}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootSnacks = ReactDOM.createRoot(document.getElementById('snacks-calories'));
rootSnacks.render(<SnacksCalories />);

/*---------React Office Work Dialog---------*/
function OfficeWorkCalories(props) {
  const [inputValueOfficeWork, setInputValueOfficeWork] = useState(0);

  const handleChange = (event) => {
    setInputValueOfficeWork(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueOfficeWork}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueOfficeWork}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootOfficeWork = ReactDOM.createRoot(document.getElementById('office-work-calories'));
rootOfficeWork.render(<OfficeWorkCalories />);

/*---------React Manual Labor Dialog---------*/
function LaborCalories(props) {
  const [inputValueLabor, setInputValueLabor] = useState(0);

  const handleChange = (event) => {
    setInputValueLabor(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueLabor}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueLabor}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootLabor = ReactDOM.createRoot(document.getElementById('labor-calories'));
rootLabor.render(<LaborCalories />);

/*---------React Cooking Dialog---------*/
function CookingCalories(props) {
  const [inputValueCooking, setInputValueCooking] = useState(0);

  const handleChange = (event) => {
    setInputValueCooking(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueCooking}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueCooking}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootCooking = ReactDOM.createRoot(document.getElementById('cooking-calories'));
rootCooking.render(<CookingCalories />);

/*---------React Walking Dialog---------*/
function WalkingCalories(props) {
  const [inputValueWalking, setInputValueWalking] = useState(0);

  const handleChange = (event) => {
    setInputValueWalking(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueWalking}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueWalking}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootWalking = ReactDOM.createRoot(document.getElementById('walking-calories'));
rootWalking.render(<WalkingCalories />);

/*---------React Running Dialog---------*/
function RunningCalories(props) {
  const [inputValueRunning, setInputValueRunning] = useState(0);

  const handleChange = (event) => {
    setInputValueRunning(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueRunning}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueRunning}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootRunning = ReactDOM.createRoot(document.getElementById('running-calories'));
rootRunning.render(<RunningCalories />);

/*---------React Gym Dialog---------*/
function GymCalories(props) {
  const [inputValueGym, setInputValueGym] = useState(0);

  const handleChange = (event) => {
    setInputValueGym(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueGym}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueGym}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootGym = ReactDOM.createRoot(document.getElementById('gym-calories'));
rootGym.render(<GymCalories />);

/*---------React Sports Dialog---------*/
function SportsCalories(props) {
  const [inputValueSports, setInputValueSports] = useState(0);

  const handleChange = (event) => {
    setInputValueSports(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueSports}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueSports}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootSports = ReactDOM.createRoot(document.getElementById('sports-calories'));
rootSports.render(<SportsCalories />);

/*---------React Outdoor Dialog---------*/
function OutdoorCalories(props) {
  const [inputValueOutdoor, setInputValueOutdoor] = useState(0);

  const handleChange = (event) => {
    setInputValueOutdoor(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="10000"
        value={inputValueOutdoor}
        onChange={handleChange}
      />
      <p>Confirmation: {inputValueOutdoor}</p>
         <input type="submit" 
               value="submit">
      </input>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootOutdoor = ReactDOM.createRoot(document.getElementById('outdoor-calories'));
rootOutdoor.render(<OutdoorCalories />);

/*---------React Dialog Modals Completed---------*/

/*-----React TABLE CLASS COMPONENT VERSION-----*/
/*class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, age, email } = student //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{age}</td>
               <td>{email}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

const rootTable = ReactDOM.createRoot(document.getElementById('root'));
rootTable.render(<Table />);
*/

/*-----REACT TABLE CLASS COMPONENT VERSION-----*/

/*-----React Table Functional component version ----- */
function ExerciseTable() {
  const [inputValue, setInputValue] = useState({ id: 1, name: 'David', age: 21, email: 'david@email.com', intake: 5, burn: 10, total: 0 });
  
  let header = Object.keys(inputValue);
  //if you want the entire object, then use Object.entries(inputValue);
  console.log("header: ");
  console.log(header);
  console.log(`header total ${Object.values(inputValue)}`);
  
let capitalizedHeader = header.map(keys => (
    keys.toUpperCase()          
));
  
let [id_head, name_head, age_head, email_head, intake_head, burn_head, total_head] = capitalizedHeader;
  console.log(id_head);
  
  let [id, name, age, email, intake, burn, total] = [0, '', 0, '', 0, 0, 0];
 
 console.log('map objects ' + Object.values(inputValue).map((value) => value));                                                    
  
   [id, name, age, email, intake, burn, total] = Object.values(inputValue).map((value)=> 
     value
    ) 
  console.log(`name, ${name}` + ' ' + typeof(name));          //return [id, name, age, email, intake, burn, total]                              
  
  console.log(id);
  total = intake-burn;
  console.log(`new total, ${total}`);
  
  function handleTotal() {
    //setInputValue({...inputValue, total: total});

  setInputValue(inputValue => ({ ...inputValue, total: total }));
  }
  
  console.log(`Updated State ${JSON.stringify(inputValue)}`);
  console.log(inputValue.email);
             
  return (
    <div>
       <br />
      {/*{Object.keys(inputValue)}*/}
      <h1 id='title'>Recorded Information & Database Query</h1>
      
            <table id='students'>
               <tbody>
                  <tr>
                    <th scope="col">{id_head}</th>
                    <th scope="col">{name_head}</th>
                    <th scope="col">{age_head}</th>
                    <th scope="col">{email_head}</th>
                    <th scope="col">{intake_head}</th>
                    <th scope="col">{burn_head}</th>
                    <th scope="col">{total_head}</th>
                  </tr>
            <tr>
               <td>{inputValue.id}</td>
               <td>{inputValue.name}</td>
               <td>{inputValue.age}</td>
               <td>{inputValue.email}</td>
              <td>{inputValue.intake}</td>
               <td>{inputValue.burn}</td>
               <td>{inputValue.total}</td>
            </tr>
               </tbody>
            </table>
      <br /><center>
      <button type="button" class="btn btn-outline-dark" id="total" onClick={handleTotal}>Recalculate Net Calorie Intake</button></center>
      <br />
    </div>
  );
}


// Find the root element and render the component
const rootExerciseTable = ReactDOM.createRoot(document.getElementById('data-table'));
rootExerciseTable.render(<ExerciseTable />);

/*-----React Table Functional component version ----- */

