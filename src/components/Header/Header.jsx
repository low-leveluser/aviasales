import React from 'react'

import logo from '../../assets/images/Logo.svg'
import classes from './Header.module.scss'

export default function Header() {
  return (
    <header className={classes.App_Header}>
      <img src={logo} className={classes.App_Logo} alt="logo" />
    </header>
  )
}