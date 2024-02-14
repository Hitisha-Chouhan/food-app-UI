import React from 'react'
import styles from './EachItem.module.css'
function EachItem({foodItem , bought ,handleOnClickBuyBtn }) {

  let msg="Buy";

  if(bought){
    msg="Bought";

  }
  return (
    <div>
      <li className={`list-group-item ${bought && 'active'}`}>{foodItem}
      
      <button
        className={styles.btn}
      onClick={handleOnClickBuyBtn}
      
      >{msg}</button>
      </li>
      
    </div>
  )
}

export default EachItem
