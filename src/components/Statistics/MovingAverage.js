import React from 'react';
import { getRelativeDate } from '../../utils/DateGetter';

function getAverage(stockDataByDate, range) {
  let acc = 0;
  for (let i = 0; i < range; i++) {
    acc += parseFloat(getRelativeDate(stockDataByDate, i)?.["4. close"]);
  }
  return (acc / range).toFixed(2);
}

export default function MovingAverage(props) {
  const stockDataByDate = props.data;

  return (
    <>
      <div>Todays Close: {JSON.stringify((parseFloat(getRelativeDate(stockDataByDate, 0)?.["4. close"])).toFixed(2))}</div>
      <div>5 Day Simple Moving Average: {getAverage(stockDataByDate, 5)}</div>
      <div>10 Day Simple Moving Average: {getAverage(stockDataByDate, 10)}</div>
      <div>20 Day Simple Moving Average: {getAverage(stockDataByDate, 20)}</div>
      <div>50 Day Simple Moving Average: {getAverage(stockDataByDate, 50)}</div>
      <div>100 Day Simple Moving Average: {getAverage(stockDataByDate, 100)}</div>
      <div>200 Day Simple Moving Average: {getAverage(stockDataByDate, 200)}</div>
      <div>400 Day Simple Moving Average: {getAverage(stockDataByDate, 400)}</div>
      <div>800 Day Simple Moving Average: {getAverage(stockDataByDate, 800)}</div>
      <div>1600 Day Simple Moving Average: {getAverage(stockDataByDate, 1600)}</div>
    </>
  );
}
