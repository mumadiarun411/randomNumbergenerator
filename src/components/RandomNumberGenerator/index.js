// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onGenerate = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading-m">Random Number</h1>
          <p className="paragraph">
            Generate a random Number in the range of 0 to 100
          </p>
          <button className="btn1" type="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="counts">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
