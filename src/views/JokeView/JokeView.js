import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './JokeView.scss'
import { startGetRandomJokeByCategory, clearJoke } from '../../actions/joke'

class JokeView extends Component {
  componentDidMount() {
    const { location } = this.props
    const category = location.pathname.split('/')[2]
    this.props.startGetRandomJokeByCategory(category)
  }

  componentWillUnmount() {
    this.props.clearJoke()
  }

  render() {
    const { joke } = this.props
    return (
      <div className={styles.CategoriesView}>
        <div className={styles.content}>
          <img src={joke.icon_url} alt='chuck norris'></img>
          <p>{joke.value}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    joke: state.joke
  }
}

const mapDispatchToProps = (dispatch) => ({
  startGetRandomJokeByCategory: (joke) => dispatch(startGetRandomJokeByCategory(joke)),
  clearJoke: () => dispatch(clearJoke())
})

export default connect(mapStateToProps, mapDispatchToProps)(JokeView)
