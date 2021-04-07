import React from 'react';
import { useParams } from 'react-router-dom';
import Stock from './Stock';

export default function StockWrapper() {
  const { ticker, time, timeUnit } = useParams();

  return (
    <>
      <Stock
        ticker={ticker}
        time={time}
        timeUnit={timeUnit} />
    </>
  );
}