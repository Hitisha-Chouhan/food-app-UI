import React from 'react'
import styles from './FoodInput.module.css'
function FoodInput({handleOnKeyDown}) {


  return (
    <center>
      <input type="text" onKeyDown={handleOnKeyDown} className={styles.inp} placeholder='Enter Food Items' />
    </center>
  )
}

export default FoodInput
