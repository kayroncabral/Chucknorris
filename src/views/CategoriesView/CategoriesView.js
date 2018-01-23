import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './CategoriesView.scss'
import { startGetCategories } from '../../actions/categories'
import CategoryList from '../../components/CategoryList'

class CategoriesView extends Component {
  componentDidMount() {
    this.props.startGetCategories()
  }

  onCategoryClick = e => {
    console.log('Category clicked')
  }

  render() {
    const { categories } = this.props

    return (
      <div className={styles.CategoriesView}>
        <div className={styles.content}>
          <CategoryList
            categories={categories}
            onCategoryClick={this.onCategoryClick}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  startGetCategories: () => dispatch(startGetCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesView)
