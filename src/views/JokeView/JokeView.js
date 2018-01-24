import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './JokeView.scss'
import { startGetRandomJokeByCategory, clearJoke } from '../../actions/joke'
import Loading from '../../components/Loading'
import ExternalLinkIcon from '../../styles/icons/link-icon.svg'

class JokeView extends Component {
  componentDidMount() {
    const { location } = this.props
    const category = location.pathname.split('/')[2]
    this.props.startGetRandomJokeByCategory(category)
  }

  componentWillUnmount() {
    this.props.clearJoke()
  }

  onClickLink = () => {
    const url = this.props.joke.url
    window.open(url)
  }

  render() {
    const { joke } = this.props

    return (
      <div className={styles.JokeView}>
        {
          (!joke.value && joke.error === null) && <Loading/>
        }
        <div className={styles.content}>
          {
            joke.value &&
            <div className={styles.joke}>
              <button className={styles.buttonIcon} onClick={this.onClickLink}>
                <ExternalLinkIcon/>
              </button>
              <img src={joke.icon_url} alt='chuck norris'></img>
              <p>{joke.value}</p>
            </div>
          }
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
