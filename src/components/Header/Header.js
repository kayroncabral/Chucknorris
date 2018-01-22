import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from './Header.scss'
import Menu from '../Menu'
import Search from '../Search'
import MenuIcon from '../../styles/icons/menu-icon.svg'

class Header extends Component {

  state = {
    isOpen: false
  }

  onMenuClick = (e) => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  onMenuClose = (e) => {
    this.setState(() => ({ isOpen: false }))
  }

  render () {
    return (
      <header className={styles.Header}>
        <div className={styles.headerContent}>
          <div className={styles.menu}>
            <button className={styles.hamburguerMenuButton} onClick={this.onMenuClick}>
              <MenuIcon/>
              <Menu isOpen={this.state.isOpen} onClose={this.onMenuClose} {...this.props}/>
            </button>
            <Link to='/'>CHUCKNORRIS</Link>
          </div>
          <Search/>
          <div className={styles.navigation}>
            <Link to='/categories'>Dashboard</Link>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Header)
