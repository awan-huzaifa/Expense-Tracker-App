"use client"
import React, { useState } from "react";

const Transaction = ({allTransactions}) => {

  // const list = allTransactions.map(transaction =>  <div><div>
  //   <p>{transaction.desc}</p> 
  // </div>
  // <div>
  //   <p>{transaction.amount}</p>
  // </div>
  // </div>)
  // const [balance, setBalance] = useState();
  // const [expense, setExpense] = useState();
  // const [income, setIncome] = useState();

  

  return (
  
    <section className="max-w-md"> 
      
      <div className="mt-12">
        <h2 className="font-bold text-xl">Transactions</h2>

        {/* <div class="flex items-center justify-center ">
          <div class="flex border rounded-lg mt-4 shadow-xl p-2">
            <input type="text" class="px-4 py-2 w-80" placeholder="Search..." />
            
            <button class="border rounded-lg px-4 text-white bg-gray-600 py-2 hover:scale-110"> 
             <p className="">Search</p> 
            </button>
          </div>
        </div> */}

         {/* <div className="flex justify-between border rounded-lg p-3 mt-4 shadow-xl">
          
           <div>
            <p>Salary</p> 
          </div>
          <div>
            <p>$5000</p>
          </div> 
        </div>  */}

        <div>
  {allTransactions.map((transaction, index) => (
    
    <div key={index} className="flex justify-between border rounded-lg p-3 mt-4 shadow-xl">
      <div>
        <p>{transaction.desc}</p> 
      </div>
      <div>
        <p>$ {transaction.amount}</p>
      </div>
      {/* if (transaction.type === "income") {
        setIncome(transaction.amount+income)
      }
       if (transaction.type === "income") {
        setExpense(transaction.amount+expense)
      } */}
    </div>
  ))}
</div>

        {/* <div className="flex justify-between border rounded-lg p-3 mt-4 shadow-xl">
          <div>
            <p>
              Travel 
            </p>
          </div>
          <div>$56000</div>
        </div> */}
      </div>
    </section>
  );
};

export default Transaction;