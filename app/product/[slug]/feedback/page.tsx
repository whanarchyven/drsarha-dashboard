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
import {FC} from "react";
import {it} from "node:test";


interface MessageInterface{
    counter:number,
    age:number,
    condition:string,
    region:string,
    message:string
}

const Message:FC<MessageInterface>=({condition,age,region,counter,message})=>{
    return(
        <div className={'border-l-2 px-3 flex flex-col gap-2 max-w-[45%]'}>
            <div className={'flex font-light text-white items-center justify-between gap-6'}>
                <p>№ {counter}</p>
                <div className={'flex items-center gap-1'}>
                    <img src={'/person.svg'}/>
                    <p>Age: {age}</p>
                </div>
                <div className={'flex items-center gap-1'}>
                    <img src={'/condition.svg'}/>
                    <p>Condition: {condition}</p>
                </div>
                <div className={'flex items-center gap-1'}>
                    <img src={'/region-mini.svg'}/>
                    <p>Region: {region}</p>
                </div>
            </div>
            <p className={'font-medium text-lg text-white'}>{message}</p>
        </div>
    )
}

export default function Home({params}: { params: { slug: string } }) {
    const getData = (slug: string) => {
        switch (slug) {
            case 'Product-1':
                return {
                    negativePositiveData: {
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
                    },
                    tags:[
                        '#effectiveness',
                        '#sideeffects',
                        '#availability',
                        '#rapidaction',
                        '#treatmentduration',
                        '#eczema',
                        '#acne',
                        '#recommended',
                        '#easeofuse',
                        '#expensive'
                    ],
                    messages:[
                        {
                            age: 22,
                            condition: 'Acne',
                            region: 'Île-de-France',
                            message: "The product helped quickly with inflammation, but it didn't completely clear my acne. A bit pricey."
                        },
                        {
                            age: 35,
                            condition: 'Eczema',
                            region: 'Provence-Alpes-Côte d-Azur',
                            message: "Significantly improved my skin condition with eczema. Results appeared after one week of use."
                        },
                        {
                            age: 50,
                            condition: 'Psoriasis',
                            region: 'Brittany',
                            message: "Helped relieve itching, but psoriasis didn’t completely disappear. Minor side effects."
                        },
                        {
                            age: 28,
                            condition: 'Seborrheic dermatitis',
                            region: 'Hauts-de-France',
                            message: "The product works great! Seborrhea almost cleared up in two weeks."
                        },
                        {
                            age: 45,
                            condition: 'Rosacea',
                            region: 'Normandy',
                            message: "Been using it for two months. Few visible changes, but the irritation is less."
                        },
                        {
                            age: 33,
                            condition: 'Eczema',
                            region: 'Auvergne-Rhône-Alpes',
                            message: "Excellent product, very happy with the results. Dryness and redness disappeared."
                        },
                        {
                            age: 60,
                            condition: 'Fungal infections',
                            region: 'Grand Est',
                            message: "Effective, but the itch didn’t fully go away. The product is expensive for my budget."
                        },
                        {
                            age: 25,
                            condition: 'Acne',
                            region: 'Nouvelle-Aquitaine',
                            message: "Great result, my face cleared up in three days. No side effects noticed."
                        },
                        {
                            age: 18,
                            condition: 'Acne',
                            region: 'Île-de-France',
                            message: "Doesn’t completely remove pimples, but reduces inflammation."
                        },
                        {
                            age: 40,
                            condition: 'Dermatitis',
                            region: 'Bourgogne-Franche-Comté',
                            message: "Reduced inflammation, but I had to use it longer than expected."
                        },
                        {
                            age: 29,
                            condition: 'Allergic rashes',
                            region: 'Provence-Alpes-Côte d-Azur',
                            message: "Great at relieving itching and redness, but I wish it worked faster."
                        },
                        {
                            age: 52,
                            condition: 'Psoriasis',
                            region: 'Brittany',
                            message: "Helped a little with symptoms, but I expected more. Noticeable side effects."
                        },
                        {
                            age: 34,
                            condition: 'Eczema',
                            region: 'Île-de-France',
                            message: "The product works perfectly, results were almost immediate. I will buy again."
                        },
                        {
                            age: 21,
                            condition: 'Acne',
                            region: 'Auvergne-Rhône-Alpes',
                            message: "Skin became clearer, but there are still some small traces of inflammation."
                        },
                        {
                            age: 27,
                            condition: 'Eczema',
                            region: 'Grand Est',
                            message: "Effective product, but too expensive. I’d prefer a more affordable price."
                        },
                        {
                            age: 31,
                            condition: 'Dermatitis',
                            region: 'Occitanie',
                            message: "Significantly reduced itching and redness. No side effects."
                        },
                        {
                            age: 46,
                            condition: 'Eczema',
                            region: 'Île-de-France',
                            message: "Helped a bit, but the symptoms returned after stopping use."
                        },
                        {
                            age: 38,
                            condition: 'Allergic rashes',
                            region: 'Hauts-de-France',
                            message: "Works well, itching was gone after two days. Price is steep."
                        },
                        {
                            age: 55,
                            condition: 'Herpes',
                            region: 'Normandy',
                            message: "Symptoms cleared fairly quickly. The drug is effective."
                        },
                        {
                            age: 30,
                            condition: 'Acne',
                            region: 'Provence-Alpes-Côte d-Azur',
                            message: "My acne reduced, but I still experience occasional flare-ups. I use it with another product."
                        }
                    ]                }
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

                <div className={'grid grid-cols-4 gap-4'}>
                    <div className={'flex flex-col h-full gap-4'}>
                        <DataTab className={'h-full'} title={<p>FEeDBACK Positive to<br/>
                            negative ratio </p>} icon={'/positive.svg'}>
                            <ChartDonut data={data.negativePositiveData}/>
                        </DataTab>
                    </div>
                    <div className={'flex flex-col h-full gap-4'}>
                        <DataTab className={'h-full !justify-start'} title={<p>Positive feedback:</p>}
                                 icon={'/smile.svg'}>
                            <ul className={'text-white px-4 flex flex-col gap-3 whitespace-pre-line'}>
                                <li className={'list-disc'}>The majority of positive reviews highlight the effectiveness
                                    of the product, especially for treating acne and eczema.
                                </li>
                                <li className={'list-disc'}><strong>Approximately 45%</strong> of users reported rapid
                                    relief, with many mentioning that symptoms began to subside just a few days after
                                    starting use.
                                </li>
                                <li className={'list-disc'}><strong>Around 30%</strong> of users praised the ease of
                                    application and the products texture, noting its user-friendly nature.
                                </li>
                                <li className={'list-disc'}><strong>Roughly 25%</strong> of users experienced minimal
                                    side effects, with no major issues reported.
                                </li>
                            </ul>
                        </DataTab>
                    </div>
                    <div className={'flex flex-col h-full gap-4'}>
                        <DataTab className={'h-full !justify-start'} title={<p>Negative feedback:</p>}
                                 icon={'/unsmile.svg'}>
                            <ul className={'text-white px-4 flex flex-col gap-3 whitespace-pre-line'}>
                                <li className={'list-disc'}><strong>40%</strong> of negative reviews indicated that the
                                    product did not
                                    completely resolve symptoms, with some users experiencing only temporary relief
                                    before symptoms returned.
                                </li>
                                <li className={'list-disc'}><strong>About 35%</strong> of negative feedback mentioned
                                    side effects, primarily allergic reactions, dryness of the skin, or mild irritation.
                                </li>
                                <li className={'list-disc'}><strong>25%</strong>of users were dissatisfied with the high
                                    cost of the product, particularly when a longer treatment course was required.
                                </li>
                            </ul>
                        </DataTab>
                    </div>
                    <div className={'flex flex-col h-full gap-4'}>
                        <DataTab className={'h-full !justify-start'} title={<p>Key Themes from<br/>
                            Feedback:</p>}
                                 icon={'/key.svg'}>
                            <ul className={'text-white px-4 flex flex-col gap-3 whitespace-pre-line'}>
                                <li className={'list-disc'}>Effectiveness in treating acne, eczema, and dermatitis.</li>
                                <li className={'list-disc'}>Concerns regarding the availability of the medication in
                                    different regions of France.
                                </li>
                                <li className={'list-disc'}>Side effects and the high cost of the product.</li>
                                <li className={'list-disc'}>Questions about the duration of treatment and the need for
                                    additional products in combination with this medication.
                                </li>
                            </ul>
                        </DataTab>
                    </div>
                    <div className={'flex flex-col h-full gap-4'}>
                        <DataTab className={'h-full !justify-start'} title={<p>Key Themes from<br/>
                            Feedback:</p>}
                                 icon={'/hashtag.svg'}>
                            <div className={'flex flex-wrap gap-4'}>
                                {data.tags.map((item: any) => <div key={item}
                                    className={'bg-cMint p-2 text-[#0C5C63] rounded-xl flex items-center justify-center'}>
                                    {item}
                                </div>)}
                            </div>
                        </DataTab>
                    </div>
                    <div className={'flex flex-col col-span-3 h-full gap-4'}>
                        <DataTab className={'h-full !justify-start'} title={<p>20 Sample<br/>
                            User Messages:</p>}
                                 icon={'/message.svg'}>
                            <div className={'flex flex-wrap gap-8'}>
                                {data.messages.map((item: any,counter) => <Message key={counter} counter={counter+1} {...item}/>)}
                            </div>
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
