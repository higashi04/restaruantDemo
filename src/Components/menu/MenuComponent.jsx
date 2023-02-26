import React from 'react'
import "./MenuComponent.css";
const MenuComponent = ({menuItem}) => {
  return (
    <div className='row menuItemRow my-3'>
      <div className="col-6 menuItemTextData">
        <h4>{menuItem.name}</h4>
        <p>{menuItem.description}</p>
      </div>
      <div className="col-6">
        <img className='menuItemImage' src={menuItem.img} alt="food" />
      </div>
    </div>
  )
}

export default MenuComponent;