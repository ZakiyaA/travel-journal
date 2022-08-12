import React from 'react'

const Nav = () => {
  return (
    <div className='main-nav'>
        <div className='nav-content'>
            <img className='nav--logo' src={require('../images/logo.png')} alt='logo' />
            <p className='nav--title'> my travel journal.</p>
        </div>
    </div>
  )
}

export default Nav