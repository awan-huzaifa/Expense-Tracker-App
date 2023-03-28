import React, { useState } from "react";

const AddTransaction = ({currentState, newStateFunction, overviewData}) => {
  const [data, setData] = useState([])
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState();
    const addNew = () => {
      
      const newData = {
        amount: Number(amount),
        desc: desc,
        type: type,}
        overviewData(newData)
        
       
      
      
      console.log("passing")
        
        console.log("passed")
        currentState="false"
        newStateFunction(currentState);
         setAmount('');
       setDesc('');
      setType('');
    }
    const cancelButton = () => {
      currentState="false"
      newStateFunction(currentState);
    }

    const newAmount = (e) => {
     setAmount(e.target.value);
     //console.log(amount)
    }
    

    
    const newDesc = (e) => {
      setDesc(e.target.value);
      console.log(desc)
     }
     console.log()

     const newType = (e) => {
      setType(e.target.value);
     }

     
    
    
  return (
    <section className="max-w-md flex flex-col mt-12 border rounded-lg shadow-xl">
      <div>
        <div className="p-3">
          <input type="number" placeholder="Amount $" class="px-4 py-2" onChange={newAmount} value={amount}/>
        </div>

        <div className="p-3">
          <input type="text" placeholder="Description" class="px-4 py-2"  onChange={newDesc} value={desc}/>
        </div>
      </div>

      <div className="flex">
        <div className="p-3">
          <input type="radio" value={"expense"} name={"type"} checked={type === "expense"} onClick={newType}/>{" "}
          <label className="text-lg text-red-600 font-bold">Expense</label>
        </div>

        <div className="p-3">
          <input type="radio" value={"income"} name={"type"} checked={type === "income"} onClick={newType} />{" "}
          <label className="text-lg font-bold text-green-600">Income</label>
        </div>
      </div>

      <div className="flex justify-center items-center p-3">
        <button className="border rounded-lg  mx-auto px-3 py-3 text-white bg-gray-600 border-l hover:scale-110"
        onClick={addNew} 
        
        >Add Transaction</button>
      </div>

      <div className="flex justify-center items-center p-3">
        <button className="border rounded-lg  mx-auto px-3 py-3 text-white bg-gray-600 border-l hover:scale-110"
        onClick={cancelButton}
        >Cancel</button>
      </div>
    </section>
  );
};

export default AddTransaction;
