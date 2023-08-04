import React from "react";
import evn from "../env.json";

export default function Create() {

   const [url, setUrl] = React.useState('');

   const sendData = (obj) => {
      fetch("http://localhost:3500", {
         method: "POST",
         headers: { 'Content-type': 'application/x-www-form-urlencoded' },
         body: JSON.stringify(obj)
      })
         .then(response => response.json())
         .then(response => {
            console.log(response);
            if (response.result) {
               setUrl('http://localhost:3500/' + response.url)
            }
         })
   }

   const loadDataFromForm = (event) => {
      event.preventDefault();
      let note = event.target.elements.note.value;
      note = note.trim();
      if (note === '') {
         alert("enter text ");
         return false;
      }
      sendData({ "note": note })
   }

   return (
      <div>
         <h1>Create4</h1>
         <form onSubmit={loadDataFromForm}>
            <label htmlFor="note">Enter note</label>
            <textarea name="note" id="note" cols="50" rows="5" defaultValue="Test"></textarea>
            <button type="submit">Create</button>
         </form>
      </div>
   )
}