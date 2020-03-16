import React from 'react'

 function Navmenue() {
    return (
     <div className="Hader">
         <img
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="logo"
        className="LogoDoc "
      />
      <ul className="navBar ">
        <li>
          <a href="/">About us</a>
        </li>
        <li>
          <a href="/">Career</a>
        </li>
        <li className="subNavBar-show">
          <a href="/">Departement</a>
          <ul className="subNavBar">
            <li>
              <a href="/">Marketing & PR</a>
            </li>
            <li>
              <a href="/">Costumer Succes & Sales</a>
            </li>
            <li>
              <a href="/">IT, Product Design & UX</a>
            </li>
            <li>
              <a href="/">Finance & Administration</a>
            </li>
            <li>
              <a href="/">HR & more</a>
            </li>
          </ul>
        </li>
      </ul>   
    </div>
    )
}
export default Navmenue