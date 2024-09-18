import Image from "next/image";
import DataTab from "@/app/components/ui/data-tab";
import {getColorsArray} from "@/app/utilities/get-colors-array";
import ChartPie from "@/app/components/charts/chart-pie";
import ChartDonut from "@/app/components/charts/chart-donut";
import ChartBar from "@/app/components/charts/chart-bar";
import AmountTab from "@/app/components/ui/amount-tab";
import ChartScatter from "@/app/components/charts/chart-scatter";
import ChartLine from "@/app/components/charts/chart-line";
import Breadcrumbs from "@/app/components/widgets/breadcrumbs";

export default function Home() {

    const yearData={
        labels:['Under 18','18-30 years','30-50 years','50-65 years','Over 65 years'],
        datasets:[{
            label: 'Percent',
            data: [12, 23, 30,20,15],
            backgroundColor: getColorsArray(),
            fill:true,
            borderRadius:15,
            borderColor:'#FFF',
            borderWidth:0,
        },
        ]
    }

    const negativePositiveData={
        labels:['Positive','Negative'],
        datasets:[{
            label: 'Percent',
            data: [65, 35],
            backgroundColor: getColorsArray(),
            fill:true,
            borderRadius:0,
            borderColor:'#FFF',
            borderWidth:0,
        },
        ]
    }

    const faqData=[
        {
            amount:500,
            title:`What are the side effects of this medication?`
        },
        {
            amount:450,
            title:`How long does treatment take`
        },
        {
            amount:300,
            title:`Can I use this medication during pregnancy?`
        },
        {
            amount:400,
            title:`What are the alternatives to this medication?`
        },
        {
            amount:350,
            title:`Can I use this medication with other drugs?`
        },
        {
            amount:250,
            title:`What treatment course is recommended?`
        }
    ]

    const regionsData={
        labels:['Île-de-France','Provence-Alpes-Côte d-Azur','Auvergne-Rhône-Alpes','Occitanie','Nouvelle-Aquitaine','Grand Est','Hauts-de-France','Bretagne','Normandie','Bourgogne-Franche-Comté'],
        datasets:[{
            label: 'Percent',
            data: [15000, 10000, 8000,7500,7000,6500,6000,5500,5000,4000],
            backgroundColor: getColorsArray(),
            fill:true,
            borderRadius:10,
            borderColor:'#FFF',
            borderWidth:0,
        },
        ]
    }

    const nosologiesData={
        labels:['Eczema','Psoriasis','Acne','Dermatitis (atopic, contact, etc.)','Fungal skin infections','Rosacea','Seborrheic dermatitis','Herpes','Allergic rashes'],
        datasets:[{
            label: 'Percent',
            data: [10000, 8000, 12000,14000,6000,5000,4000,3500,4500],
            backgroundColor: getColorsArray(),
            fill:true,
            borderRadius:10,
            borderColor:'#FFF',
            borderWidth:0,
        },
        ]
    }

    const diseasesData={
        labels:['Primary','Secondary'],
        datasets:[{
            label: 'Percent',
            data: [70, 30],
            backgroundColor: getColorsArray(),
            fill:true,
            borderRadius:0,
            borderColor:'#FFF',
            borderWidth:0,
        },
        ]
    }

    const productsData={
        labels:['Product 1','Product 2','Product 3','Product 4','Product 5'],
        datasets:[{
            label: 'Cases',
            data: [6000, 5500,4800,3200,2500],
            backgroundColor: getColorsArray(),
            fill:false,
            borderRadius:0,
            borderColor:getColorsArray(),
            borderWidth:0,
            pointRadius:10,
            pointHoverRadius:15
        },
        ]
    }

    const drugsData={
        labels:['Drug A','Drug B','Drug C','Drug D','Drug E'],
        datasets:[{
            label: ['Cases'],
            data: [700, 500,450,300,200],
            backgroundColor: getColorsArray(),
            fill:false,
            borderRadius:0,
            borderColor:getColorsArray(),
            borderWidth:0,
            pointRadius:10,
            pointHoverRadius:15
        },
        ]
    }







    return (
    <div className="bg-green-gradient p-8 font-inter min-h-screen">

        <div className={'mb-4'}>
            <Breadcrumbs/>
        </div>

        <div className={'grid grid-cols-12 gap-4'}>
            <div className={'flex flex-col h-full gap-4 col-span-4'}>
                <DataTab className={'h-2/5'} title={<p>Percentage distribution <br/>by age groups (percent):</p>} icon={'icon.svg'}>
                    <ChartBar data={yearData}/>
                </DataTab>
                <DataTab className={'h-3/5 !gap-8 !justify-start'} title={<p>FAQ and their distribution<br/>by frequency (number of questions):</p>} icon={'faq.svg'}>
                    <div className={'flex flex-col gap-3'}>
                        {faqData.map((question,counter)=><AmountTab key={counter} amount={question.amount}>{question.title}</AmountTab>)}
                    </div>
                </DataTab>
            </div>
            <div className={'flex flex-col h-full gap-4 col-span-5'}>
                <DataTab className={'h-1/2'} title={<p>Percentage distribution by regions <br/>of France (number of cases):</p>} icon={'region.svg'}>
                    <ChartBar postfix={''} data={regionsData}/>
                </DataTab>
                <DataTab className={'h-1/2'} title={<p>Distribution by dermatological<br/>nosologies (number of cases):</p>} icon={'nosologies.svg'}>
                    <ChartBar postfix={''} data={nosologiesData}/>
                </DataTab>
            </div>
            <div className={'flex flex-col h-full gap-4 col-span-3'}>
                <DataTab className={'h-1/2'} title={<p>Distribution between
                    primary and secondary
                    diseases (percent):</p>} icon={'primary.svg'}>
                    <ChartDonut data={diseasesData}/>
                </DataTab>
                <DataTab className={'h-1/2'} title={<p>Positive to negative<br/>
                    ratio (percentages):</p>} icon={'positive.svg'}>
                    <ChartDonut data={negativePositiveData}/>
                </DataTab>
            </div>
        </div>
        <div className={'grid grid-cols-12 mt-4 gap-4'}>
            <div className={'col-span-4'}>

            </div>
            <div className={'col-span-4'}>
                <DataTab title={<p>Frequency of product selection<br/> (number of cases):</p>} icon={'product.svg'}>
                    <ChartLine hideLegend data={productsData}/>
                </DataTab>

            </div>
            <div className={'col-span-4'}>
                <DataTab title={<p>Frequency of off-label drug<br/> prescriptions (number of cases):</p>} icon={'drug.svg'}>
                    <ChartLine hideLegend data={drugsData}/>
                </DataTab>

            </div>

        </div>
    </div>
    );
}
