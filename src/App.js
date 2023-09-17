import { useState } from 'react';
import './App.css';


function App() {
const [weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(0);
const [hours, setHours] = useState(0);
const [gender, setGender] = useState('male');
const [result, setResult] = useState(0);

function handleSubmit(e) {
  e.preventDefault();
  let alcohollevel = 0;
  let burning = weight/10;
  let grams = bottles*0.33*8*4.5;
  let gramsleft = grams-(burning*hours);
  if (gender === 'male') {
    alcohollevel = gramsleft/(weight*0.7);
  }
  else {
    alcohollevel = gramsleft/(weight*0.6);
  }

  if(alcohollevel<0){
    alcohollevel=0;
  }
  setResult(alcohollevel);
}

  return (
    <div>
      <h3>Calculating blood alcohol level</h3>
      
        <form onSubmit={handleSubmit}>
        <div>
          <label>Weight: </label>
          <input type="number" name="weight" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles: </label>
          <input type="number" name="bottles" step="1" value={bottles} onChange={e => setBottles(e.target.value)}></input>
        </div>
        <div>
        <label>Hours:   </label>
          <input type="number" name="hours" step="1" value={hours} onChange={e=> setHours(e.target.value)}></input>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.setGender(e.target.value))} /><label>Male</label>
          <input type="radio" name="gender" value="female"  onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>Alcohol level: {result.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
        </form>
    </div>
  );
}

export default App;
