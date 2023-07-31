import React from "react";
import './Project2.css';

export default function Project2() {

   const [count, setCount] = React.useState(0);
   // const [comment, setComment] = React.useState([]);
   // let commentRef = createRef();

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


   // let addComment = () => {

   //    let textAreaValue = commentRef.current.value;
   //    console.log(textAreaValue);

   //    let newComment = [...comment, textAreaValue];
   //    setComment(newComment);
   //    commentRef.current.value = '';
   // }


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
            <a href="https://css.in.ua/html/tag/a/target" target="_blanc" >view code</a>
         </div>
         {/* <hr />
         <hr />

         <div>
            <textarea ref={commentRef}></textarea>
         </div>
         <div>
            <button onClick={addComment}>Add comment</button>
         </div>
         <div>
            <ul>
               {comment.map((item, index) => 
                  <li key={index.toString()}>{item}</li>
               )}
            </ul>
         </div> */}
      </>
   )
}
