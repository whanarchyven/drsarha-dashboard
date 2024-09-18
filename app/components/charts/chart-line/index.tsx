"use client"
import {FC} from 'react';
import {Line, Pie, Scatter} from "react-chartjs-2";
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
    hideLegend?:boolean
}

const ChartBar:FC<BarChartInterface> = ({data,hideLegend}) => {

    const chartOptions={
        // scales : {
        //     x:{
        //         grid:{
        //             display:true
        //         },
        //         ticks:{
        //             display:false,
        //             font:{
        //                 weight:'200',
        //                 family: 'Roboto',
        //                 size:12
        //             },
        //             steps:10,
        //         }
        //     },
        //     y:{
        //         grid:{
        //             display:true,
        //         },
        //         ticks:{
        //             display:false,
        //             font:{
        //                 weight:'200',
        //                 family: 'Roboto',
        //                 size:12
        //             },
        //
        //         },
        //     },
        //
        // },
        // elements:{
        //     point:{
        //         radius:1,
        //     }
        // },

        plugins: {
            legend: {
                display:!hideLegend,
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
            <Line className={'w-full'} options={chartOptions} data={{...data}}/>
        </div>
    );
};

export default ChartBar;