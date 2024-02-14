import React from 'react'

function ErrorPage({fooditem}) {
  
  if(fooditem.length===0){
  return (
    
    <div>
     <li class="list-group-item" ><h3>I'm still hungry!</h3></li>
    </div>
  )
}
}
export default ErrorPage
