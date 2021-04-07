import React, { Component } from 'react';
import StockController from '../../controllers/StockController';
import MovingAverage from '../Statistics/MovingAverage';

class Stock extends Component {
  constructor(){
    super();
    this.setData = this.setData.bind(this);
    this.state = { data: {} };
  }

  setData(newData) {
    this.setState({
      data: newData
    });
  }

  render() {
    return <>
      <StockController
        data={this.state.data}
        setData={this.setData}
        ticker={this.props.ticker}
        time={this.props.time}
        timeUnit={this.props.timeUnit} />
      <MovingAverage
        data={this.state.data}
      />
    </>
  }
}

export default Stock;