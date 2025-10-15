import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        
        <div className='left'>
            <div className='title'>
                <h3>KLU SHOPPING </h3>
            </div>
        </div>

        <div className='center'>
            <ul>
                <li>Womans</li>
                <li>Mans</li>
                <li>Childerns</li>
                <li>Beauty</li>
                
            </ul>
        </div>

        <div className='search'>
            <input type="text" placeholder='search.....'/>
        </div>

        <div className='right'>
            <div className='signin'>
                SignIn/SIGNUP
            </div>
            <div className='cart'>
                Cart
            </div>
        </div>

    </div>
  )
}

export default Header