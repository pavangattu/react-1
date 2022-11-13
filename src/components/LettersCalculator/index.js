// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {num: 0}

  inputChange = event => {
    this.setState({num: event.target.value.length})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container-1">
          <h1 className="head">Calculate the Letters you enter</h1>
          <label className="para" htmlFor="input">
            {' '}
            Enter the phrase
          </label>

          <input
            id="input"
            type="search"
            className="input-cont"
            onChange={this.inputChange}
            placeholder="Enter the phrase"
          />

          <p className="button">No.of letters: {num}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
