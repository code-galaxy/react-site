import React from "react";
import "./Project4.css";

import Create from "./Elements/Create4";
import Erorr from "./Elements/Erorr4";
import Header from "./Elements/Header4";
import Main from "./Elements/Main4";
import Note from "./Elements/Note4";

export default function Project4() {
   return (
      <div className="main">
         <div>
         <Header />
         <Main />
         <Create />
         <Note />
         <Note />
         <Erorr />
         </div>
         <div className="link-to-code">

        <a href="https://github.com/code-galaxy/react-site/blob/main/src/Projects/Project2/Project2.js" target="_blanc">
          view code
        </a>
      </div>
      </div>

   )
}