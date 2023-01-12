import React from 'react'
import './nav.css'
import Downsmall from '../../../assets/DownSmall.svg'
import people from '../../../assets/People.svg'

const Nav = () => {
  return (
    <div className="nav d-flex justify-content-between align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center">
        <img className="downsmall" src={Downsmall} alt="" />
        <p style={{ marginBottom: "0px" }} className="user">Users</p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <p style={{ marginBottom: "0px" }} className="user">Manibond Art</p>
        <img className="people" src={people} alt="" />
      </div>
    </div>
  )
}

export default Nav
