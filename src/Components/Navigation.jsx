import React from 'react'
import '../styles/navigation.css'
import { Link } from 'react-router'
function Navigation() {
  return (
    <div className="navigationContainer">
        <Link to={'/'}>
        <div className="logo"></div>
        </Link>

        <div className="links">
            <span>Team Info</span>
            <span>About</span>
        </div>
    </div>
  )
}

export default Navigation