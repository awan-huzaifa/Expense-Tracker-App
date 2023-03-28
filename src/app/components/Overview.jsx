"use client"
import React, { useState } from "react";
import AddTransaction from "./AddTransaction";





const Overview = ({mainData}) => {
  
  const [state,setState] = useState(false);
  const [balance, setBalance] = useState(5000);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [mapData, setMapData] = useState([])
  mapData.map((transaction, index) => {
    
    if (transaction.type === "income") {
      transaction.type = "done"
      setIncome(  income+transaction.amount)
      setBalance(balance+transaction.amount)
    } else if (transaction.type=== "expense"){
      transaction.type = "done"
      setExpense(expense+transaction.amount)
      setBalance(balance-transaction.amount)
    }
  }
   

    
  )
  

  
  const newTransaction = () => {
    setState(true);
    console.log(state)
    }

    const stateChange = (newState) =>{
      setState(newState)
      console.log(state)
    }
    const firstData = (data) =>{
     console.log("overview data")
     console.log(data);
     const dataArray = [data]
     setMapData(dataArray)
     mainData(data)

     
    }
  
  

  if(state == true){return (<AddTransaction currentState={state} newStateFunction={stateChange} overviewData={firstData}/>)}

  
  return (
    <section className="max-w-md">
      {/* {mapData.map((transaction, index) => (
        key=index 
      ))} */}
     
      <div className="grid grid-rows-2 grid-cols-2 gap-2 mt-8 ">
        <div className="px-3 py-3 text-center ">
          <h2 className="font-medium tracking-wide text-lg">Balance: $ {balance}</h2>
        </div>

        <div className="ml-auto hover:scale-110">
          <button className="border rounded-lg  mx-auto px-3 py-3 text-white bg-gray-600 border-l"
          onClick={newTransaction}
          >
            ADD NEW
          </button>
        </div>

        <div className="border rounded-lg p-3 shadow-xl mx-3 shadow-gray-500 hover:scale-110">
          <p className="text-lg">Expense</p>
          <h3 className="text-lg text-red-600 font-bold">$ {expense}</h3>
        </div>

        <div className="border rounded-lg p-3 shadow-xl mx-3 shadow-gray-500 hover:scale-110">
          <p className="text-lg">Income</p>
          <h3 className="text-lg font-bold text-green-600">$ {income}</h3>
        </div>
      </div>

      
        
        {/* <AddTransaction/> */}
      
    </section>
  );
};

export default Overview;
