import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Legend } from 'chart.js';
import './style.scss';

Chart.register(ArcElement);
Chart.register(Legend);

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }],
};

const options = {
    elements: {
        arc: {
            borderWidth: 2
        }
    },
    responsive: false,
};

const PieChart = () => {

    const onLegendClick = (e, legendItem, legend) => {
        console.log('hello', e, legendItem, legend);
    }

    return (
        <div>
            <Pie data={data} options={{
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