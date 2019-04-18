import React, { Component} from 'react'


class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (<header>
      <div className='logo'> Huemæn House Real Estate </div>
      <nav> 
          <a href='#'>create Ads</a>
          <a href='#'>About Us</a>
          <a href='#'>Log in</a>
          <a href='#' className='register-btn'>Register</a>
      </nav>
    </header>)
  }
}

export default Header;