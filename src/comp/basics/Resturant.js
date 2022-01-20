import React from 'react'

import "./style.css";
import Menu from "./meanuApi";
import MenuCard from "./MenuCard";


const uniqueList=[... new Set(Menu.map((curElement)=>{
  return curElement.category;
})
),
"All",
 
];



const Resturant = () => {
      
    const[menuData,setMenuData]=React.useState(Menu);
    
    const filterItem=(category)=>{
      const updatedList=Menu.filter((curElement)=>{
        return curElement.category=== category;
      })
      setMenuData(updatedList);
    }

    return (
    <>

      <nav className="navbar">
        <div className="btn-group">

          <button className="btn-group_item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
          <button className="btn-group_item"  onClick={()=>filterItem("lunch")} >Lunch</button>
          <button className="btn-group_item"  onClick={()=>filterItem("evening")} >Evening</button>
          <button className="btn-group_item" onClick={()=>filterItem("dinner")}  >Dinner</button>
          <button className="btn-group_item"  onClick={()=>setMenuData(Menu)} >All</button>
        </div>
        </nav>

      <MenuCard atrPro={menuData} />
    </>

    );
};

export default Resturant



