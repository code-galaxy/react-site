import React from "react";
import "./Project3.css";

export default function Project3() {
  return (
    <>
      <div className="description">
        <h1>Get user data </h1>
      </div>
      <div className="Project2-style Project3-style">
        <div className="Project3-input">
          
          <select name="select" id="Project3-select" >
            <option value="All users" placeholder="All user"  >All user</option>
            <option value="0">ivanov</option>
            
        </select>
          
          <div  className="Project3-checkbox">
            <input type="checkbox" id="chk1-label" />
            <label for="chk1-label">name</label>
          </div>
          <div className="Project3-checkbox">
            <input type="checkbox" id="chk2-label" />
            <label for="chk1-label">username</label>
          </div>
          <div className="Project3-checkbox">
            <input type="checkbox" id="chk3-label" />
            <label for="chk1-label">e-mail</label>
          </div>
          <div className="Project3-checkbox">
            <input type="checkbox" id="chk4-label" />
            <label for="chk1-label">phone</label>
          </div>
          <div className="Project3-checkbox">
            <input type="checkbox" id="chk5-label" />
            <label for="chk1-label">website</label>
          </div>

          <button className="Project3-btn">GET</button>
        </div>
        <div className="Project3-out">
          <h1>hello</h1>
        </div>
      </div>

      <div className="link-to-code">
        <a href="https://css.in.ua/html/tag/a/target" target="_blanc">
          view code
        </a>
      </div>
    </>
  );
}
