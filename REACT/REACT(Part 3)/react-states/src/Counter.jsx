import { useState } from "react";


function Counter() {
   let [count , setCount] = useState(0); //initialization 
  //  console.log("component is re-executed");
  //  console.log(`count = ${count}`);
  

    let incCount = () => {
        // setCount(count+1)
        // console.log(`count inside incCount = ${count}`);

        setCount((currCount) => {
          return currCount +1;
        })
        setCount((currCount) => {
          return currCount +1;
        })
       
    }
  return (
    <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount} >Increase Count</button>
    </div>
  )
}

export default Counter