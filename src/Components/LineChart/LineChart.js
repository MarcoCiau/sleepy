import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
  datasets: [
    {
      label: 'Weekly Sleep',
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: '#4f9bff',
      borderColor: 'rgba(79, 155, 255, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const LineChart = () => (
  <>
    <div className='header'>
      {/* <h1 className='title'>Line Chart</h1> */}

    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;