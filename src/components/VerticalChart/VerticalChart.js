import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  elements: {
    bar: {
      borderWidth: 5,
      hoverBackgroundColor: 'blue',
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
      display: false,
      labels: {
        boxWidth: 20,
      }
    },
    title: {
      display: true,
      text: '2020',

    },
    Tooltip: {
      backgroundColor: "#68A9D8"
    }
  },

};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  borderWidth: 3
};

export const VerticalChart = ({dataChart}) => {
  return <div>
    <Bar data={{
      datasets: [{
        data: dataChart.netWorthGrowth,
        label:'Vertical',
        borderWidth: 1,
        Width: "20px",
        backgroundColor: "#68A9D8"
      }],
      ...data,
    }} options={{
      ...options,
    }}/>
  </div>
}
