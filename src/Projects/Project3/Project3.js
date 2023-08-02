import React from "react";
import "./Project3.css";


export default function Project3() {
  const [data, setData] = React.useState([]);
  const [dataUser, setDataUser] = React.useState({});
  const [visibleDataUser, setVisibleDataUser] = React.useState(false)
  const [alertInfo, setAlertInfo] = React.useState(false);
  const [visibleLiName, setVisibleLiName] = React.useState(false);
  const [visibleLiUserName, setVisibleLiUserName] = React.useState(false);
  const [visibleLiEmail, setVisibleLiEmail] = React.useState(false);
  const [visibleLiPhone, setvisibleLiPhone] = React.useState(false);
  const [visibleLiWebsite, setvisibleLiWebsite] = React.useState(false);
  const [visibleLiAddress, setvisibleLiAddress] = React.useState(false);
  const [visibleLiCompany, setvisibleLiCompany] = React.useState(false);

  const selectRef = React.useRef();
  const checkboxIdRef = React.useRef();
  const checkboxUserNameRef = React.useRef();
  const checkboxEmailRef = React.useRef();
  const checkboxPhoneRef = React.useRef();
  const checkboxWebsiteRef = React.useRef();
  const checkboxAddressRef = React.useRef();
  const checkboxCompanyRef = React.useRef();

  const getValue = () => {
    if (selectRef.current.value === "0") {
      setAlertInfo(true);
    }
    if (selectRef.current.selectedIndex) {
      setVisibleDataUser(true);
      setAlertInfo(false)
      setDataUser(data[selectRef.current.selectedIndex - 1]);
    }
    if (checkboxUserNameRef.current.checked) {
      setVisibleLiUserName(true);
      setVisibleDataUser(false);
      setVisibleLiName(true);
    }
    if (checkboxEmailRef.current.checked) {
      setVisibleLiEmail(true);
      setVisibleDataUser(false);
      setVisibleLiName(true);
    }
    if (checkboxPhoneRef.current.checked) {
      setvisibleLiPhone(true);
      setVisibleDataUser(false);
      setVisibleLiName(true);
    }
    if (checkboxWebsiteRef.current.checked) {
      setvisibleLiWebsite(true);
      setVisibleDataUser(false);
      setVisibleLiName(true);
    }
    if (checkboxAddressRef.current.checked) {
      setvisibleLiAddress(true);
      setVisibleDataUser(false);
      setVisibleLiName(true);
    }
    if (checkboxCompanyRef.current.checked) {
      setvisibleLiCompany(true);
      setVisibleDataUser(false);
      setVisibleLiName(true);
    }
  }

  const clearCheckbox = () => {
    checkboxUserNameRef.current.checked = false;
    checkboxEmailRef.current.checked = false;
    checkboxPhoneRef.current.checked = false;
    checkboxWebsiteRef.current.checked = false;
    checkboxAddressRef.current.checked = false;
    checkboxCompanyRef.current.checked = false;
    setVisibleDataUser(false);
    setVisibleLiName(false);
    setVisibleLiUserName(false);
    setVisibleLiEmail(false);
    setvisibleLiPhone(false);
    setvisibleLiWebsite(false);
    setvisibleLiAddress(false);
    setvisibleLiCompany(false);
  }

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
          <select ref={selectRef} name="select" id="Project3-select" >
            <option value="0" hidden>to choose customer</option>
            {data.map((item) => <option key={item.id} value={item.id} >{item.name}</option>)}
          </select>
          <div className="Project3-checkbox">
            <input ref={checkboxUserNameRef} type="checkbox" id="chk2-label" />
            <label htmlFor="chk2-label">username</label>
          </div>
          <div className="Project3-checkbox">
            <input ref={checkboxEmailRef} type="checkbox" id="chk3-label" />
            <label htmlFor="chk3-label">e-mail</label>
          </div>
          <div className="Project3-checkbox">
            <input ref={checkboxPhoneRef} type="checkbox" id="chk4-label" />
            <label htmlFor="chk4-label">phone</label>
          </div>
          <div className="Project3-checkbox">
            <input ref={checkboxWebsiteRef} type="checkbox" id="chk5-label" />
            <label htmlFor="chk5-label">website</label>
          </div>
          <div className="Project3-checkbox">
            <input ref={checkboxCompanyRef} type="checkbox" id="chk6-label" />
            <label htmlFor="chk6-label">company</label>
          </div>
          <div className="Project3-checkbox">
            <input ref={checkboxAddressRef} type="checkbox" id="chk7-label" />
            <label htmlFor="chk7-label">address</label>
          </div>
          <div><button onClick={getValue} className="Project3-btn">GET user data</button></div>
          <div><button onClick={clearCheckbox} className="Project3-btn btn-clear">Clear all data</button></div>
        </div>

        <div className="Project3-out">
          {alertInfo &&
            <div>
              <p> Hello.  To get data on a client, you first need to select it (to choose customer).  Thank you. </p>
            </div>
          }
          <ul>
            {visibleLiName && <li>name: <span>{dataUser.name}</span></li>}
            {visibleLiUserName && <li>username: <span>{dataUser.username}</span></li>}
            {visibleLiEmail && <li>email: <span>{dataUser.email}</span></li>}
            {visibleLiPhone && <li>phone: <span>{dataUser.phone}</span></li>}
            {visibleLiWebsite && <li>website: <span><a href="#" target="_blanc">www.{dataUser.website}</a></span></li>}
            {visibleLiCompany && <li>company: <span>{dataUser.company.name}</span></li>}
            {visibleLiAddress && <li>address: city <span>{dataUser.address.city}</span>, street <span>{dataUser.address.street}</span></li>}
          </ul>

          {visibleDataUser &&
            <ul>
              <li>name: <span>{dataUser.name}</span></li>
              <li>id: <span>{dataUser.id}</span></li>
              <li>username: <span>{dataUser.username}</span></li>
              <li>email: <span>{dataUser.email}</span></li>
              <li>phone: <span>{dataUser.phone}</span></li>
              <li>website: <span><a href="#" target="_blanc">www.{dataUser.website}</a></span></li>
              <li>company: <span>{dataUser.company.name}</span></li>
              <li>address: city <span>{dataUser.address.city}</span>, street <span>{dataUser.address.street}</span></li>
            </ul>
          }
        </div>
      </div >
      <div className="link-to-code">
        <a href="https://github.com/code-galaxy/react-site/blob/main/src/Projects/Project3/Project3.js" target="_blanc">
          view code
        </a>
      </div>
    </>
  );
}
