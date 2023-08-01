import React from "react";
import "./Project3.css";


export default function Project3() {
  const [data, setData] = React.useState([]);
  const [dataUser, setDataUser] = React.useState({});
  const [visibleDataUser, setVisibleDataUser] = React.useState(false);
  const selectRef = React.useRef();

  // ==============================================================================

  const getValue = () => {
    if (selectRef.current.selectedIndex) {
      setVisibleDataUser(true);
      setDataUser(data[selectRef.current.selectedIndex-1]);

      // selectRef.current.options[selectRef.current.options[0]].classList.remove('selected')

      // selectRef.current.options[selectRef.current.selectedIndex].classList.add('selected')
    }
  }
  console.log(dataUser);

  // ==============================================================================
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
    console.log('componentDidMount');
  }, []);

  return (
    <>
      <div className="description">
        <h1>Get user data </h1>
      </div>
      <div className="Project2-style Project3-style">
        <div className="Project3-input">

          <select ref={selectRef} onChange={getValue} name="select" id="Project3-select" >
            <option key={new Date().getTime().toString()} value="0" className="selected" hidden>to choose customer</option>
            {data.map((item) => <option key={item.id} value={item.id} >{item.name}</option>)}
          </select>

          <div className="Project3-checkbox">
            <input type="checkbox" id="chk1-label" />
            <label htmlFor="chk1-label">id</label>
          </div>
          <div className="Project3-checkbox">
            <input type="checkbox" id="chk2-label" />
            <label htmlFor="chk2-label">name</label>
          </div>
          <div className="Project3-checkbox">
            <input type="checkbox" id="chk3-label" />
            <label htmlFor="chk3-label">username</label>
          </div>
          <div className="Project3-checkbox">
            <input type="checkbox" id="chk4-label" />
            <label htmlFor="chk4-label">e-mail</label>
          </div>
          <div className="Project3-checkbox">
            <input type="checkbox" id="chk5-label" />
            <label htmlFor="chk5-label">phone</label>
          </div>
          <div className="Project3-checkbox">
            <input type="checkbox" id="chk6-label" />
            <label htmlFor="chk6-label">website</label>
          </div>
          <div className="Project3-checkbox">
            <input type="checkbox" id="chk6-label" />
            <label htmlFor="chk6-label">address</label>
          </div>
          <button className="Project3-btn">GET user data</button>
        </div>
        <div className="Project3-out">

          {visibleDataUser &&
            <ul>
              <li>id: <span>{dataUser.id}</span></li>
              <li>name: <span>{dataUser.name}</span></li>
              <li>name: <span>{dataUser.username}</span></li>
              <li>email: <span>{dataUser.email}</span></li>
              <li>phone: <span>{dataUser.phone}</span></li>
              <li>website: <span><a href="#" target="_blanc">www.{dataUser.website}</a></span></li>
              <li>company: <span>{dataUser.company.name}</span></li>
              <li>address: city <span>{dataUser.address.city}</span>, street <span>{dataUser.address.street}</span></li>
            </ul>}
        </div>
      </div >

      <div className="link-to-code">
        <a href="https://css.in.ua/html/tag/a/target" target="_blanc">
          view code
        </a>
      </div>
    </>
  );
}
