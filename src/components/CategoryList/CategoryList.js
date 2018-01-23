import React from 'react'
import PropTypes from 'prop-types'
import styles from './CategoryList.scss'
import CategoryListItem from '../CategoryListItem'

const CategoryList = ({ categories, onCategoryClick }) => {
  const onItemClick = e => {
    onCategoryClick(e)
  }

  const renderCategory = (category, index) => {
    return (
      <CategoryListItem
        key={index}
        title={category}
        onItemClick={onItemClick}
      />
    )
  }

  return (
    <div className={styles.CategoryList}>
      {
        categories.map(renderCategory)
      }
    </div>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.array,
  onCategoryClick: PropTypes.func
}

CategoryList.defaultProps = {
  categories: [],
  onCategoryClick: () => {}
}

export default CategoryList
