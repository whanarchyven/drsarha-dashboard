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
import AvailableTab from "@/app/components/ui/available-tab";

export default function Home({params}: { params: { slug: string } }) {


    const getData = (slug: string) => {
        switch (slug) {
            case 'Product-1':
                return {
                    yearData: {
                        labels: ['Under 18', '18-30 years', '30-50 years', '50-65 years', 'Over 65 years'],
                        datasets: [{
                            label: 'Percent',
                            data: [12, 25, 35, 18, 10],
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
                            data: [72, 28],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 0,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , seasonalData: {
                        labels: ['Spring', 'Summer', 'Autumn', 'Winter'],
                        datasets: [{
                            label: 'Percent',
                            data: [22, 28, 30, 20],
                            backgroundColor: getColorsArray(),
                            pointRadius: 10,
                            pointHoverRadius: 15,
                            borderRadius: 0,
                            borderColor: '#FFF',
                            borderWidth: 2,
                            tension: 0.5
                        },
                        ]
                    },

                    feedBack: 4,
                    repeatPercent: 65

                    , faqData: [
                        {
                            amount: 400,
                            title: `What are the side effects?`
                        },
                        {
                            amount: 350,
                            title: `How long should it be used?`
                        },
                        {
                            amount: 250,
                            title: `Can it be used during pregnancy?`
                        },
                        {
                            amount: 300,
                            title: `Are there any alternatives?`
                        },
                        {
                            amount: 270,
                            title: `Can it be combined with other drugs?`
                        },
                        {
                            amount: 230,
                            title: `What is the recommended course of treatment?`
                        }
                    ]

                    , availableData: [
                        {
                            title: 'Île-de-France:',
                            status: 'yes'
                        },
                        {
                            title: 'Provence-Alpes-Côte-d-Azur:',
                            status: 'no'
                        },
                        {
                            title: 'Auvergne-Rhône-Alpes:',
                            status: 'yes'
                        },
                        {
                            title: 'Occitanie:',
                            status: 'limited'
                        },
                        {
                            title: 'Nouvelle-Aquitaine:',
                            status: 'yes'
                        },
                        {
                            title: 'Grand Est',
                            status: 'yes'
                        },
                        {
                            title: 'Hauts-de-France',
                            status: 'no'
                        },
                        {
                            title: 'Brittany',
                            status: 'limited'
                        },
                        {
                            title: 'Normandy',
                            status: 'yes'
                        },
                        {
                            title: 'Bourgogne-Franche-Comté',
                            status: 'no'
                        },
                    ]


                    , regionsData: {
                        labels: ['Île-de-France', 'Provence-Alpes-Côte-d-Azur', 'Auvergne-Rhône-Alpes', 'Occitanie', 'Nouvelle-Aquitaine', 'Grand Est', 'Hauts-de-France', 'Brittany', 'Normandy', 'Bourgogne-Franche-Comté'],
                        datasets: [{
                            label: 'Cases',
                            data: [5000, 3500, 3200, 2800, 2500, 2200, 2000, 1800, 1600, 1400],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 10,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , nosologiesData: {
                        labels: ['Eczema', 'Psoriasis', 'Acne', 'Dermatitis (atopic, contact, etc.)', 'Fungal skin infections', 'Rosacea', 'Seborrheic dermatitis', 'Herpes', 'Allergic rashes','None'],
                        datasets: [{
                            label: 'Cases',
                            data: [3000, 2500, 4000, 3500, 1500, 1200, 1000, 900, 1200,500],
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
                            data: [70, 30],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 0,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , productsData: {
                        labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
                        datasets: [{
                            label: 'Cases',
                            data: [1800, 1500, 1200, 900, 700],
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
                    },
                    usageData: {
                        labels: ['Regular use', 'Irregular user', 'Not user'],
                        datasets: [{
                            label: ['Percent'],
                            data: [65, 25, 10],
                            backgroundColor: getColorsArray(),
                            fill: false,
                            borderRadius: 0,
                            borderColor: getColorsArray(),
                            borderWidth: 0,
                            pointRadius: 10,
                            pointHoverRadius: 15
                        },
                        ]
                    },
                    completionData: {
                        labels: ['Full completion', 'Patial completion', 'Not completed'],
                        datasets: [{
                            label: ['Percent'],
                            data: [62, 28, 10],
                            backgroundColor: getColorsArray(),
                            fill: false,
                            borderRadius: 0,
                            borderColor: getColorsArray(),
                            borderWidth: 0,
                            pointRadius: 10,
                            pointHoverRadius: 15
                        },
                        ]
                    },
                                        durationData: {
                        labels: ['Up to 1 month', '1-3 months', 'More than 3 months'],
                        datasets: [{
                            label: ['Percent'],
                            data: [42, 33, 25],
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
            case 'Product-2':
                return {
                    yearData: {
                        labels: ['Under 18', '18-30 years', '30-50 years', '50-65 years', 'Over 65 years'],
                        datasets: [{
                            label: 'Percent',
                            data: [15, 20, 30, 25, 10],
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

                    , seasonalData: {
                        labels: ['Spring', 'Summer', 'Autumn', 'Winter'],
                        datasets: [{
                            label: 'Percent',
                            data: [22, 28, 30, 20],
                            backgroundColor: getColorsArray(),
                            pointRadius: 10,
                            pointHoverRadius: 15,
                            borderRadius: 0,
                            borderColor: '#FFF',
                            borderWidth: 2,
                            tension: 0.5
                        },
                        ]
                    },

                    feedBack: 5,
                    repeatPercent: 70

                    , faqData: [
                        {
                            amount: 380,
                            title: `What are the side effects?`
                        },
                        {
                            amount: 340,
                            title: `How long should it be used?`
                        },
                        {
                            amount: 230,
                            title: `Can it be used during pregnancy?`
                        },
                        {
                            amount: 290,
                            title: `Are there any alternatives?`
                        },
                        {
                            amount: 260,
                            title: `Can it be combined with other drugs?`
                        },
                        {
                            amount: 210,
                            title: `What is the recommended course of treatment?`
                        }
                    ]

                    , availableData: [
                        {
                            title: 'Île-de-France:',
                            status: 'yes'
                        },
                        {
                            title: 'Provence-Alpes-Côte-d-Azur:',
                            status: 'yes'
                        },
                        {
                            title: 'Auvergne-Rhône-Alpes:',
                            status: 'yes'
                        },
                        {
                            title: 'Occitanie:',
                            status: 'limited'
                        },
                        {
                            title: 'Nouvelle-Aquitaine:',
                            status: 'yes'
                        },
                        {
                            title: 'Grand Est',
                            status: 'yes'
                        },
                        {
                            title: 'Hauts-de-France',
                            status: 'no'
                        },
                        {
                            title: 'Brittany',
                            status: 'limited'
                        },
                        {
                            title: 'Normandy',
                            status: 'yes'
                        },
                        {
                            title: 'Bourgogne-Franche-Comté',
                            status: 'no'
                        },
                    ]


                    , regionsData: {
                        labels: ['Île-de-France', 'Provence-Alpes-Côte-d-Azur', 'Auvergne-Rhône-Alpes', 'Occitanie', 'Nouvelle-Aquitaine', 'Grand Est', 'Hauts-de-France', 'Brittany', 'Normandy', 'Bourgogne-Franche-Comté'],
                        datasets: [{
                            label: 'Cases',
                            data: [4800, 3300, 2800, 2600, 2200, 2100, 1900, 1700, 1600, 1400],
                            backgroundColor: getColorsArray(),
                            fill: true,
                            borderRadius: 10,
                            borderColor: '#FFF',
                            borderWidth: 0,
                        },
                        ]
                    }

                    , nosologiesData: {
                        labels: ['Eczema', 'Psoriasis', 'Acne', 'Dermatitis (atopic, contact, etc.)', 'Fungal skin infections', 'Rosacea', 'Seborrheic dermatitis', 'Herpes', 'Allergic rashes','None'],
                        datasets: [{
                            label: 'Cases',
                            data: [2800, 2200, 3800, 3200, 1300, 1100, 950, 800, 1100,600],
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
                        labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
                        datasets: [{
                            label: 'Cases',
                            data: [1700, 1400, 1100, 800, 600],
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
                    },
                    usageData: {
                        labels: ['Regular use', 'Irregular user', 'Not user'],
                        datasets: [{
                            label: ['Percent'],
                            data: [65, 25, 10],
                            backgroundColor: getColorsArray(),
                            fill: false,
                            borderRadius: 0,
                            borderColor: getColorsArray(),
                            borderWidth: 0,
                            pointRadius: 10,
                            pointHoverRadius: 15
                        },
                        ]
                    },
                    completionData: {
                        labels: ['Full completion', 'Patial completion', 'Not completed'],
                        datasets: [{
                            label: ['Percent'],
                            data: [62, 28, 10],
                            backgroundColor: getColorsArray(),
                            fill: false,
                            borderRadius: 0,
                            borderColor: getColorsArray(),
                            borderWidth: 0,
                            pointRadius: 10,
                            pointHoverRadius: 15
                        },
                        ]
                    },
                    durationData: {
                        labels: ['Up to 1 month', '1-3 months', 'More than 3 months'],
                        datasets: [{
                            label: ['Percent'],
                            data: [42, 33, 25],
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

    const data = getData(params.slug)

    if (data) {
        return (
            <div className="bg-green-gradient p-8 font-inter min-h-screen">
                {/*{params.slug}*/}
                <div className={'mb-4'}>
                    <Breadcrumbs/>
                </div>

                <div className={'grid grid-cols-12 gap-4'}>
                    <div className={'flex flex-col h-full gap-4 col-span-4'}>
                        <DataTab className={'h-1/3'} title={<p>Age distribution<br/>
                            (percentages):</p>} icon={'/icon.svg'}>
                            <ChartBar data={data.yearData}/>
                        </DataTab>
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

                    </div>
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
                        {/*<DataTab title={<p>Frequency of off-label drug<br/> prescriptions (number of cases):</p>}*/}
                        {/*         icon={'/drug.svg'}>*/}
                        {/*    <ChartLine hideLegend data={data.drugsData}/>*/}
                        {/*</DataTab>*/}
                    </div>
                </div>
                <div className={'grid grid-cols-12 gap-4 mt-4'}>
                    <div className={'flex flex-col h-full gap-4 col-span-4'}>
                        <DataTab className={'h-full'} title={<p>Availability <br/>
                            in regions:</p>} icon={'/region.svg'}>
                            <div className={'flex flex-col gap-3'}>
                                {data.availableData.map((item,counter) => <AvailableTab key={counter} {...item} />)}
                            </div>
                        </DataTab>
                    </div>
                    <div className={'flex flex-col h-full gap-4 col-span-5'}>
                        <DataTab className={'h-full'} title={<p>Seasonal dependency of prescriptions
                            (percentages):</p>} icon={'/drug.svg'}>
                            <ChartLine data={data.seasonalData} hideLegend={true}/>
                        </DataTab>
                    </div>
                    <div className={'flex flex-col h-full gap-4 col-span-3'}>
                        <DataTab className={'h-2/5'} title={<p>Product<br/>
                            feedback</p>} icon={'/feedback.svg'}>
                            <div className={'w-full justify-around flex gap-3 items-center'}>
                                {[1, 2, 3, 4, 5].map((item) => {
                                    if (item <= data.feedBack) {
                                        return <img key={item} src={'/star.svg'}/>
                                    } else {
                                        return <img key={item} className={'opacity-50'} src={'/star.svg'}/>
                                    }
                                })}
                            </div>
                        </DataTab>
                        <DataTab className={'h-3/5'} title={<p>Repeat purchases<br/>
                            (percentages):</p>} icon={'/shop.svg'}>
                            <div className={'flex items-center justify-center'}>
                                <p className={'text-8xl text-white font-bold'}>{data.repeatPercent}%</p>
                            </div>
                        </DataTab>
                    </div>
                </div>
                <div className={'grid mt-4 grid-cols-3 gap-4'}>
                    <div className={'flex flex-col h-full gap-4'}>
                        <DataTab className={'h-full'} title={<p>Usage of the product<br/>
                            (percentages):</p>} icon={'/drug.svg'}>
                            <ChartDonut data={data.usageData}/>
                        </DataTab>
                    </div>
                    <div className={'flex flex-col h-full gap-4'}>
                        <DataTab className={'h-full'} title={<p>Completion of prescription
                            (percentages):<br/></p>} icon={'/complete.svg'}>
                            <ChartDonut data={data.completionData}/>
                        </DataTab>
                    </div>
                    <div className={'flex flex-col h-full gap-4'}>
                        <DataTab className={'h-full'} title={<p>Duration of prescription<br/>
                            after recovery (percentages):</p>} icon={'/calendar.svg'}>
                            <ChartDonut data={data.durationData}/>
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
