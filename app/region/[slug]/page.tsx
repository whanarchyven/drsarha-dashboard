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
            case 'Ile-de-France':
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
                            data: [60, 40],
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
                            amount: 120,
                            title: `What are the side effects of this drug?`
                        },
                        {
                            amount: 110,
                            title: `How long does the treatment take?`
                        },
                        {
                            amount: 70,
                            title: `Can this drug be used during pregnancy?`
                        },
                        {
                            amount: 90,
                            title: `What are the alternatives to this drug?`
                        },
                        {
                            amount: 85,
                            title: `Can I use this drug with other medications?`
                        },
                        {
                            amount: 60,
                            title: `What is the recommended treatment course?`
                        }
                    ]

                    , regionsData: {
                        labels: ['Paris','Hauts-de-Seine','Seine-Saint-Denis','Val-de-Marne'],
                        datasets: [{
                            label: 'Percent',
                            data: [6000,3500,2800,2700],
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
                            label: 'Percent',
                            data: [3500, 2800, 3200, 4000, 1500, 1200, 1000, 900, 1200],
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
                            data: [68, 32],
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
                            data: [1200, 1000, 950, 700, 650],
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
                            data: [700, 500, 450, 300, 200],
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
            case 'Provence-Alpes-Cote-d-Azur':
                return {
                    yearData: {
                        labels: ['Under 18', '18-30 years', '30-50 years', '50-65 years', 'Over 65 years'],
                        datasets: [{
                            label: 'Percent',
                            data: [10, 22, 34, 20, 14],
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
                            data: [66, 34],
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
                            amount: 100,
                            title: `What are the side effects of this drug`
                        },
                        {
                            amount: 95,
                            title: `How long does the treatment take?`
                        },
                        {
                            amount: 65,
                            title: `Can this drug be used during pregnancy?`
                        },
                        {
                            amount: 85,
                            title: `What are the alternatives to this drug?`
                        },
                        {
                            amount: 80,
                            title: `Can I use this drug with other medications?`
                        },
                        {
                            amount: 50,
                            title: `What is the recommended treatment course?`
                        }
                    ]

                    , regionsData: {
                        labels: ['Bouches-du-Rhône','Var','Alpes-Maritimes','Vaucluse','Hautes-Alpes','Alpes-de-Haute-Provence'],
                        datasets: [{
                            label: 'Percent',
                            data: [4500,2000,1800,900,500,300],
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
                            label: 'Percent',
                            data: [2800, 2500, 3000, 3500, 1200, 1000, 850, 700, 950],
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
                            data: [72, 28],
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
                            data: [1100, 950, 900, 650, 500],
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
                            data: [700, 500, 450, 300, 200],
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
    }
    else{
        return null
    }
}
