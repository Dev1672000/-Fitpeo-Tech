import React from 'react'
import { DoughnutChart } from './DoughnutChart';
const CustomerDatsa = () => {
  return (
    <div className='bg-white text-center rounded-lg'>
      <h1 className='text-lg font-bold pt-3'>Customer</h1>
      <p>customer that buy product</p>
      <div className='p-5'>
        {" "}
        <DoughnutChart />
      </div>
    </div>
  );
}

export default CustomerDatsa