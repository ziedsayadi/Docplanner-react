import React from 'react'

 const CompanyList = [
    {
        brand: "Znanylekarz"
      },
      {
        brand: "Doctoralia"
      },
      {
        brand: "MioDottore"
      },
      {
        brand: "DoktorTakvimi"
      },
      {
        brand: "Znamylekar"
      }
];
function CompanyBrands(props){
    let tab=[]
     tab= CompanyList.map((el,i)=>
        
        <div key={i} className="compelements">
             <a href="#">
            <img
              className="imagebrand"
              src="https://www.docplanner.com/img/sygnet.png"
            />
          </a>
          {el.brand}
        </div>
        
        
        )
return tab

}
export default CompanyBrands