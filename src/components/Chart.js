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
            data: [49, 19],
            backgroundColor: ['#38b000','#c62e2e'],
            borderColor: ['black', 'black'],
        }]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        cutout: 120
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