import React from 'react'
import ExpenseList from '../../components/expense-list';
import TopFold from '../../components/topfold';
import "./home.css";
const home = () => {
  return (
    <div className='home'>
        <div>
          <TopFold/>
          <ExpenseList/>
        </div>
        
    </div>
  )
}

export default home;