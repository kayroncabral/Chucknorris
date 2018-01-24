import React from 'react'
import styles from './Loading.scss'
import ReactLoading from 'react-loading'

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <ReactLoading type='cubes' color='#fff'/>
    </div>
  )
}

export default Loading
