import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Legend } from 'chart.js';
import './style.scss';

Chart.register(ArcElement);
Chart.register(Legend);



const options = {
    elements: {
        arc: {
            borderWidth: 1
        }
    },
    responsive: false,
};

const data = {
    labels: ["aaa", 'bbb', 'ccc'],
    datasets: [{
        label: 'My First Dataset',
        data: [1, 2, 3],
        backgroundColor: ['red', 'yellow', 'blue'],
        hoverOffset: 4
    }],
};

const getLabel = (chartData) => {
    const labels = chartData.map((item) => item.name);
    const amount = chartData.map((item) => item.amount);
    const bgColor = ['#71A1A4', '#82B5A2', '#6994A6', '#85B1C5'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: amount,
            backgroundColor: bgColor,
            hoverOffset: 4
        }],
    };
    return data
}
const PieChart = ({ chartData }) => {
    
    const onLegendClick = (e, legendItem, legend) => {
        console.log('hello', e, legendItem, legend);
    }

    return (
        <div>
            <Pie data={getLabel(chartData)} options={{
            // <Pie data={data} options={{
                ...options,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 10,
                            boxHeight: 10,
                            font: {
                                size: 10,
                            },
                        },
                        onClick: onLegendClick 
                    }
                }
            }} />
        </div>
    )
}

export default PieChart