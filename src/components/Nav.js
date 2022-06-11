import React, { Component } from 'react';
import user_avatar from "../assets/images/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
import '../styles/nav.css';

export class Nav extends Component {
  render() {
    return (
      <div className='nav_bar'>

        <img src={user_avatar} alt="user_avatar" className="user_avatar" />
        <li className='nav_list'> Bookings </li>
        <li className='nav_list'> Recently viewed </li>
        <li className='nav_list'> Trips </li>
          
      </div>
    )
  }
}

export default Nav