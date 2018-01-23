import React from 'react'
import PropTypes from 'prop-types'
import styles from './CategoryListItem.scss'

const CategoryListItem = ({ title, onItemClick }) => {
  const onClick = e => {
    onItemClick(e)
  }

  return (
    <div className={styles.CategoryListItem} onClick={onClick}>
      <p>{title}</p>
    </div>
  )
}

CategoryListItem.propTypes = {
  title: PropTypes.string,
  onItemClick: PropTypes.func
}

CategoryListItem.defaultProps = {
  title: '',
  onItemClick: () => {}
}

export default CategoryListItem
