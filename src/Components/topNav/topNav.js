import React from 'react';
import './topNav.css'

const topNav = () => {
    return (
        <div className='topNav'>
            <div className='topGlass'>
                {/* <div>Home</div>
                <div>About</div>
                <div>Contact us</div>
                <div>Login</div>
                 */}
                <span>Home</span>
                <span>About</span>
                <span>Contact us</span>
                {/* <span>Products</span> */}
                <span>Login</span>
            </div>
        </div>
    )
}

export default topNav;