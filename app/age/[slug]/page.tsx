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

export default function Home({params}: { params: { slug: string } }) {


    const getData = (slug: string) => {
        switch (slug) {
            case '30-50':
                return {
                    yearData: {
                        labels: ['Under 18', '18-30 years', '30-50 years', '50-65 years', 'Over 65 years'],
                        datasets: [{
                            label: 'Percent',
                            data: [14, 25, 32, 18, 11],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 15,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , negativePositiveData: {
                        labels: ['Positive', 'Negative'],
                        datasets: [{
                            label: 'Percent',
                            data: [62, 38],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 0,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , faqData: [
                        {
                            amount: 350,
                            title: `What are the side effects of this drug?`
                        },
                        {
                            amount: 320,
                            title: `How long does the treatment take?`
                        },
                        {
                            amount: 250,
                            title: `Can this drug be used during pregnancy?`
                        },
                        {
                            amount: 300,
                            title: `What are the alternatives to this drug?`
                        },
                        {
                            amount: 270,
                            title: `Can I use this drug with other medications?`
                        },
                        {
                            amount: 230,
                            title: `What is the recommended treatment course?`
                        }
                    ]

                    , regionsData: {
                        labels: ['Île-de-France','Provence-Alpes-Côte-d-Azur','Auvergne-Rhône-Alpes','Occitanie','Nouvelle-Aquitaine','Grand Est','Hauts-de-France','Brittany','Normandy','Bourgogne-Franche-Comté'],
                        datasets: [{
                            label: 'Cases',
                            data: [5500,4000,3500,3200,3100,2900,2800,2500,2300,2000],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 10,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , nosologiesData: {
                        labels: ['Eczema', 'Psoriasis', 'Acne', 'Dermatitis (atopic, contact, etc.)', 'Fungal skin infections', 'Rosacea', 'Seborrheic dermatitis', 'Herpes', 'Allergic rashes'],
                        datasets: [{
                            label: 'Cases',
                            data: [4000, 3500, 4200, 4800, 2100, 1900, 1800, 1600, 2000],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 10,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , diseasesData: {
                        labels: ['Primary', 'Secondary'],
                        datasets: [{
                            label: 'Percent',
                            data: [65, 35],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 0,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , productsData: {
                        labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
                        datasets: [{
                            label: 'Cases',
                            data: [2800, 2400, 2100, 1800, 1500],
                            backgroundColor: getColorsArray(),
                            fill: false,
                            borderRadius: 0,
                            borderColor: getColorsArray(),
                            borderWidth: 0,
                            pointRadius: 10,
                            pointHoverRadius: 15
                        },
                        ]
                    }

                    , drugsData: {
                        labels: ['Drug A', 'Drug B', 'Drug C', 'Drug D', 'Drug E'],
                        datasets: [{
                            label: ['Cases'],
                            data: [300, 250, 220, 180, 150],
                            backgroundColor: getColorsArray(),
                            fill: false,
                            borderRadius: 0,
                            borderColor: getColorsArray(),
                            borderWidth: 0,
                            pointRadius: 10,
                            pointHoverRadius: 15
                        },
                        ]
                    }
                }
            case '18-30':
                return {
                    yearData: {
                        labels: ['Under 18', '18-30 years', '30-50 years', '50-65 years', 'Over 65 years'],
                        datasets: [{
                            label: 'Percent',
                            data: [14, 25, 32, 18, 11],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 15,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , negativePositiveData: {
                        labels: ['Positive', 'Negative'],
                        datasets: [{
                            label: 'Percent',
                            data: [68, 32],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 0,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , faqData: [
                        {
                            amount: 400,
                            title: `What are the side effects of this drug?`
                        },
                        {
                            amount: 350,
                            title: `How long does the treatment take?`
                        },
                        {
                            amount: 220,
                            title: `Can this drug be used during pregnancy?`
                        },
                        {
                            amount: 310,
                            title: `What are the alternatives to this drug?`
                        },
                        {
                            amount: 290,
                            title: `Can I use this drug with other medications?`
                        },
                        {
                            amount: 240,
                            title: `What is the recommended treatment course?`
                        }
                    ]

                    , regionsData: {
                        labels: ['Île-de-France','Provence-Alpes-Côte-d-Azur','Auvergne-Rhône-Alpes','Occitanie','Nouvelle-Aquitaine','Grand Est','Hauts-de-France','Brittany','Normandy','Bourgogne-Franche-Comté'],
                        datasets: [{
                            label: 'Cases',
                            data: [4000,3500,3000,2800,2600,2400,2200,2000,1800,1600],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 10,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , nosologiesData: {
                        labels: ['Eczema', 'Psoriasis', 'Acne', 'Dermatitis (atopic, contact, etc.)', 'Fungal skin infections', 'Rosacea', 'Seborrheic dermatitis', 'Herpes', 'Allergic rashes'],
                        datasets: [{
                            label: 'Cases',
                            data: [2500, 2200, 5000, 3000, 1800, 1300, 1200, 1100, 1700],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 10,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , diseasesData: {
                        labels: ['Primary', 'Secondary'],
                        datasets: [{
                            label: 'Percent',
                            data: [75, 25],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 0,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , productsData: {
                        labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
                        datasets: [{
                            label: 'Cases',
                            data: [3000, 2800, 2500, 2200, 2000],
                            backgroundColor: getColorsArray(),
                            fill: false,
                            borderRadius: 0,
                            borderColor: getColorsArray(),
                            borderWidth: 0,
                            pointRadius: 10,
                            pointHoverRadius: 15
                        },
                        ]
                    }

                    , drugsData: {
                        labels: ['Drug A', 'Drug B', 'Drug C', 'Drug D', 'Drug E'],
                        datasets: [{
                            label: ['Cases'],
                            data: [350, 300, 250, 200, 180],
                            backgroundColor: getColorsArray(),
                            fill: false,
                            borderRadius: 0,
                            borderColor: getColorsArray(),
                            borderWidth: 0,
                            pointRadius: 10,
                            pointHoverRadius: 15
                        },
                        ]
                    }
                }
        }
    }

    const data=getData(params.slug)

    if(data){
        return (
            <div className="bg-green-gradient p-8 font-inter min-h-screen">
                {/*{params.slug}*/}
                <div className={'mb-4'}>
                    <Breadcrumbs/>
                </div>

                <div className={'grid grid-cols-12 gap-4'}>
                    <div className={'flex flex-col h-full gap-4 col-span-5'}>
                        <DataTab className={'h-1/2'}
                                 title={<p>Distribution by departments<br/>
                                     in {params.slug} (number of cases):</p>}
                                 icon={'/region.svg'}>
                            <ChartBar postfix={''} data={data.regionsData}/>
                        </DataTab>
                        <DataTab className={'h-1/2'}
                                 title={<p>Distribution by dermatological<br/> conditions (number of cases):</p>}
                                 icon={'/nosologies.svg'}>
                            <ChartBar postfix={''} data={data.nosologiesData}/>
                        </DataTab>
                    </div>
                    <div className={'flex flex-col h-full gap-4 col-span-3'}>
                        <DataTab className={'h-1/2'} title={<p>Distribution between
                            primary and secondary
                            diseases (percent):</p>} icon={'/primary.svg'}>
                            <ChartDonut data={data.diseasesData}/>
                        </DataTab>
                        <DataTab className={'h-1/2'} title={<p>Positive to negative<br/>
                            ratio (percentages):</p>} icon={'/positive.svg'}>
                            <ChartDonut data={data.negativePositiveData}/>
                        </DataTab>
                    </div>
                    <div className={'flex flex-col h-full gap-4 col-span-4'}>
                        {/*<DataTab className={'h-1/3'} title={<p>Age distribution<br/>*/}
                        {/*    (percentages):</p>} icon={'/icon.svg'}>*/}
                        {/*    <ChartBar data={data.yearData}/>*/}
                        {/*</DataTab>*/}
                        <DataTab className={'h-1/3 !gap-8 !justify-start'}
                                 title={<p>FAQ and their distribution<br/>by frequency (number of questions):</p>}
                                 icon={'/faq.svg'}>
                            <div className={'flex flex-col gap-3'}>
                                {data.faqData.map((question,counter) => <AmountTab key={counter}
                                    amount={question.amount}>{question.title}</AmountTab>)}
                            </div>
                        </DataTab>
                        <DataTab title={<p>Frequency of product selection<br/> (number of cases):</p>}
                                 icon={'/product.svg'}>
                            <ChartLine hideLegend data={data.productsData}/>
                        </DataTab>
                        <DataTab title={<p>Frequency of off-label drug<br/> prescriptions (number of cases):</p>}
                                 icon={'/drug.svg'}>
                            <ChartLine hideLegend data={data.drugsData}/>
                        </DataTab>
                    </div>
                </div>
                {/*<div className={'grid grid-cols-12 mt-4 gap-4'}>*/}
                {/*    <div className={'col-span-4'}>*/}

                {/*    </div>*/}
                {/*    <div className={'col-span-4'}>*/}
                {/*        <DataTab title={<p>Frequency of product selection<br/> (number of cases):</p>}*/}
                {/*                 icon={'/product.svg'}>*/}
                {/*            <ChartLine hideLegend data={data.productsData}/>*/}
                {/*        </DataTab>*/}

                {/*    </div>*/}
                {/*    <div className={'col-span-4'}>*/}
                {/*        <DataTab title={<p>Frequency of off-label drug<br/> prescriptions (number of cases):</p>}*/}
                {/*                 icon={'/drug.svg'}>*/}
                {/*            <ChartLine hideLegend data={data.drugsData}/>*/}
                {/*        </DataTab>*/}

                {/*    </div>*/}

                {/*</div>*/}
            </div>
        )
    } else {
        return null
    }
}
