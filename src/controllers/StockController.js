import React, { Component } from 'react';

class StockController extends Component {
  async componentDidMount() {
    const ticker = this.props.ticker;
    const myKey = 'process.env.API_KEY';
    const sts = 'TIME_SERIES_DAILY';
    const outputSize = 'full';
    const tickerURI = `https://www.alphavantage.co/query?function=${sts}&symbol=${ticker}&outputsize=${outputSize}&apikey=${myKey}`;

    const response = await fetch(tickerURI)
    const json = await response.json();
    this.props.setData(json["Time Series (Daily)"]);
  }

  render() {
    let {
      ticker,
      time,
      timeUnit
    } = this.props;
//    let tsd = this.props.data

    return <>
      <h2>{`Ticker=${ticker}`}</h2>
      {/*<div> {JSON.stringify(tsd, null, '\t')} </div>*/}
    </>
  }
}

export default StockController;