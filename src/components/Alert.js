import React from 'react'

export default function Alert(props) {

  const capitalize = (word)=>{
  const Lower = word.toLowerCase();  
  return Lower.charAt(0).toUpperCase() + Lower.slice(1);  
  };
  return ( 
    props.alert &&
    <div>
         <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" class="btn-close" onClick={props.showAlert} data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}


