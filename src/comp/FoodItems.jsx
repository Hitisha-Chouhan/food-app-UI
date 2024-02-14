import React, { useState } from 'react'
import EachItem from './EachItem'

function FoodItems({fooditem}) {

  let [activeItems , setActiveItems]=useState([]);

  const onBuyBtn =(item , event)=>{
    let newActiveItems=[...activeItems , item]
    setActiveItems(newActiveItems)
  }
     
   
  return (
    <div>
       <ul className="list-group">
   
      {fooditem.map((items) => 
      (<EachItem 
        
       
       foodItem={items}
       bought={activeItems.includes(items)}
        key={items}
        handleOnClickBuyBtn={(event)=> onBuyBtn(items , event)}
        
        ></EachItem>))}


</ul>
    </div>
  )
}

export default FoodItems
