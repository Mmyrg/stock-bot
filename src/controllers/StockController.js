import React, { Component } from 'react';

class StockController extends Component {
  constructor() {
    super();
    this.state = { data: {} };
  }

  async componentDidMount() {
    const ticker = this.props.ticker;
    const myKey = 'process.env.API_KEY';
    const sts = 'TIME_SERIES_DAILY';
    const outputSize = 'full';
    const tickerURI = `https://www.alphavantage.co/query?function=${sts}&symbol=${ticker}&outputsize=${outputSize}&apikey=${myKey}`;

    console.log("present");
    const response = await fetch(tickerURI)
    const json = await response.json();
    this.setState({ 'data': json });
  }

  render() {
    let {
      ticker,
      time,
      timeUnit
    } = this.props;
    let tsd = this.state.data["Time Series (Daily)"];

    return<>
      <h2>StockController!</h2>
      {`ticker=${ticker}, time=${time}, timeUnit=${timeUnit}`}
      <div>
        {JSON.stringify(tsd, null, '\t')}
      </div>
    </>
  }
}

export default StockController;