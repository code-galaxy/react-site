import React from "react";
import './Project1.css';

export default function Project1() {

   const [count, setCount] = React.useState(0);

   let countFuncPlus = () => {
      let tempCount = count;
      tempCount++;
      setCount(tempCount);
   }

   let countFuncMinus = () => {
      let tempCount = count;
      tempCount--;
      if (tempCount === -99) tempCount = 0;
      setCount(tempCount);
   }
   return (
      <>
         <div className="description">
            <h1>Counter</h1>
         </div>

         <div className="Project1-style">
            <button onClick={countFuncPlus} className="btn-project-plus"> + </button>
            <div>
               <span>{count}</span>
            </div>
            <button onClick={countFuncMinus} className="btn-project-minus"> - </button>
         </div>
         <div className="event-odd">
            <h4>{count % 2 === 0 ? 'even' : "odd"}</h4>
         </div>
         <div className="link-to-code">
            <a href="https://github.com/code-galaxy/react-projects/blob/main/src/Projects/Project1/Project1.js" target="_blanc" >view code</a>
         </div>
      </>
   )
}