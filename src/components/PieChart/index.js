import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Legend } from 'chart.js';
import './style.scss';

Chart.register(ArcElement);
Chart.register(Legend);

const sColor = '60%';
const lColor = '50%';
const options = {
    elements: {
        arc: {
            borderWidth: 1
        }
    },
    responsive: false,
};

const getLabel = (chartData) => {
    let baseColorH = 20;
    const labels = chartData.map((item) => item.name);
    const amount = chartData.map((item) => item.amount);
    const color = chartData.map(() => {
        baseColorH += 20;
        return `hsl(${baseColorH}, ${sColor}, ${lColor})`;
    })
    const bgColor = color;
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
                ...options,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 20,
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