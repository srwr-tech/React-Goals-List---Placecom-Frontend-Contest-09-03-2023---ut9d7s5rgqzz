import React, { useState } from 'react'
import '../styles/App.css';
import GoalForm from './GoalForm';
import ListOfGoals from './ListOfGoals';

const App = () => {

  const [allGoals, setAllGoals] = useState([]);
  
  const handleAddGoal=(goal)=>{setAllGoals([...allGoals,goal]);}

  return (
    <div id="main">
      <GoalForm />
      <ListOfGoals />
    </div>
  )
  
}


export default App;
