import React, { Component } from 'react'
import { connect } from 'react-redux'
import { history } from '../../routers/AppRouter'
import styles from './CategoriesView.scss'
import { startGetCategories } from '../../actions/category'
import CategoryList from '../../components/CategoryList'
import Loading from '../../components/Loading'

class CategoriesView extends Component {
  componentDidMount() {
    this.props.startGetCategories()
  }

  onCategoryClick = (e, category) => {
    history.push(`/joke/${category}`)
  }

  render() {
    const { category } = this.props

    return (
      <div className={styles.CategoriesView}>
        {
          (category.categories.length === 0 && category.error === null) &&
          <div className={styles.center}>
             <Loading/>
          </div>
        }
        <div className={styles.content}>
          <CategoryList
            categories={category.categories}
            onCategoryClick={this.onCategoryClick}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category
  }
}

const mapDispatchToProps = (dispatch) => ({
  startGetCategories: () => dispatch(startGetCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesView)
