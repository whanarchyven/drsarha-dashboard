"use client"
import {FC} from 'react';
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,PieController,ArcElement
} from 'chart.js';
import {getColorsArray} from "@/app/utilities/get-colors-array";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend,
    BarElement,PieController,ArcElement);

interface BarChartInterface {
    data:any,
    postfix?:string
}

const ChartBar:FC<BarChartInterface> = ({data,postfix='%'}) => {

    const chartOptions={
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value:any) {
                        return value+' '+postfix;
                    }
                }
            }
        },

        plugins: {
            legend: {
                display:false,
                labels: {
                    display:false,
                    // This more specific font property overrides the global property
                    usePointStyle:true,

                }
            },

        },
        // maintainAspectRatio : false,

    }
    ChartJS.defaults.color='rgba(255,255,255,1)';
    ChartJS.defaults.borderColor='rgba(255,255,255,0.1)';

    return (
        <div className={'w-full'}>
            <Bar className={'w-full'} options={chartOptions} data={{...data}}/>
        </div>
    );
};

export default ChartBar;