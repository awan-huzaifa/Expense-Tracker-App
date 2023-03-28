"use client"
import React, { useState } from 'react'
import Overview from './Overview'
import Transaction from './Transaction'

const Main = () => {

  const [transactions, setTransactions] = useState([
  //   {amount: 100,
  //   desc: "Gas",
  //   type: "expense",
  // }
  ])
  const arrivingData = (data) => {
    const transactionArray = [...transactions,data]
    //transactionArray.push(data)
    setTransactions(transactionArray);
    console.log("main data");
    console.log(transactions);
    console.log("")

  }

  return (
    <section className='max-w-md'>
      <Overview mainData = {arrivingData}/>
      <Transaction allTransactions = {transactions}/>
    </section>
  )
}

export default Main  