import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
    const data = {
        labels: ['Spam', 'Not Spam'],
        datasets: [{
            label: 'Spam',
            data: [75, 25],
            backgroundColor: ['red','grey'],
            borderColor: ['red', 'green'],
        }]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    }
    return (
        <div className='pie'>
            <Doughnut
                data={data}
                options={options}
            ></Doughnut>
        </div>
    )
}

export default Chart