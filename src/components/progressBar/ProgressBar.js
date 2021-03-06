import React, { Component } from 'react'
import './ProgressBar.css'

export default class ProgressBar extends Component {

  constructor(props) {
    super(props);

    this.intervalId = 0;
    this.level = this.props.level;

    this.state = {
      percentage: 0
    }
  }

  setPercentage = (interval, increment = 0.01) => this.intervalId = setInterval(() => this.setState({ percentage: this.state.percentage + increment }), interval);

  componentDidMount = () => this.setPercentage(15);

  componentDidUpdate = () => {
    if (this.state.percentage >= this.level)
      clearInterval(this.intervalId);
  }

  render() {
    const { title } = this.props;
    const percentage = this.state.percentage * 100;
    return (
      <div className='meter'>
        <span className='progress-bar' style={{ width: percentage + '%' }}>{title}</span>
        <span className='percentage'>{percentage.toString().split('.')[0] + '%'}</span>
      </div>
    )
  }
}
