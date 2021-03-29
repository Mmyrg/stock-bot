import React from 'react';
import { useParams } from 'react-router-dom';
import StockController from '../../controllers/StockController';

export default function Stock() {
  const { ticker, time, timeUnit } = useParams();

  return (
    <>
      <h2>Stock</h2>
      <StockController ticker={ticker} time={time} timeUnit={timeUnit} />
    </>
  );
}