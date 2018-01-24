import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.scss'

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.navigation}>
      <Link to='/'>Categories</Link>
    </div>
  </header>
)

export default Header
