import React from 'react'
import './leftNav.css'

const leftNav = () => {
  return (
    <div className='leftNav'>
        <div className='shop'>
            <h3>Shops</h3>
        </div>

        {/* Menu */}
        <div className='menu'>
            <span>Dashboard</span>
            <span>Orders</span>
            <span>Customers</span>
            <span>Products</span>
            <span>Analytics</span>

        </div>



    </div>
  )
}

export default leftNav;