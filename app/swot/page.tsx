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
import SwotTab from "@/app/components/ui/swot-tab";

export default function Home() {

    return (
        <div className="bg-green-gradient text-white p-8 font-inter min-h-screen">
            {/*{params.slug}*/}
            <div className={''}>
                <Breadcrumbs/>
            </div>

            <div className={'my-5'}>
                <p className={'my-5 text-xl font-bold uppercase'}>SWOT Analysis of the General State of Dermatological
                    Diseases and Treatments:</p>
                <div className={'grid grid-cols-4 gap-4'}>
                    <SwotTab title={'Strengths:'} label={'S'}>
                        <ul className={'p-5 flex flex-col gap-5'}>
                            <li className={'list-disc'}><strong>Effective Medications: </strong><br/>Most drugs for
                                treating eczema, psoriasis, and other dermatological conditions show good results, with
                                a high remission rate (up to 60%).
                            </li>
                            <li className={'list-disc'}><strong>Wide Range of Treatments: </strong><br/>Various
                                treatment options are available, including both initial and maintenance therapy during
                                remission.
                            </li>
                            <li className={'list-disc'}><strong>Innovation: </strong><br/>Modern medications provide
                                rapid symptom relief and improve patients quality of life.
                            </li>
                        </ul>
                    </SwotTab>
                    <SwotTab title={'Weaknesses:'} label={'W'}>
                        <ul className={'p-5 flex flex-col gap-5'}>
                            <li className={'list-disc'}><strong>High Treatment Costs: </strong><br/>Many users complain
                                about the high cost of medications, especially with prolonged use.
                            </li>
                            <li className={'list-disc'}><strong>Side Effects: </strong><br/>Some medications often have
                                side effects such as dry skin, itching, or allergic reactions.
                            </li>
                            <li className={'list-disc'}><strong>Limited Availability: </strong><br/>In some regions of
                                France, medications are difficult to obtain, creating issues for patients.
                            </li>
                        </ul>
                    </SwotTab>
                    <SwotTab title={'Opportunities:'} label={'O'}>
                        <ul className={'p-5 flex flex-col gap-5'}>
                            <li className={'list-disc'}><strong>Development of New Medications:</strong><br/>There is
                                potential for creating new drugs with fewer side
                                effects and more affordable prices.
                            </li>
                            <li className={'list-disc'}><strong>Improving Accessibility: </strong><br/>Enhancing
                                logistics and medication availability could expand the patient base.
                            </li>
                            <li className={'list-disc'}><strong>Combination Therapies: </strong><br/>Mntroducing new
                                comprehensive solutions to treat multiple conditions simultaneously may improve
                                treatment outcomes.
                            </li>
                        </ul>
                    </SwotTab>
                    <SwotTab title={'Threats:'} label={'T'}>
                        <ul className={'p-5 flex flex-col gap-5'}>
                            <li className={'list-disc'}><strong>Disease Recurrence: </strong><br/>Although many patients
                                achieve remission, the return of symptoms poses a significant threat.
                            </li>
                            <li className={'list-disc'}><strong>Resistance to Medications: </strong><br/>Some long-term
                                patients may develop resistance to existing treatments.
                            </li>
                            <li className={'list-disc'}><strong>Psychological Issues: </strong><br/>Skin conditions can
                                lead to psychological disorders in patients, such as depression and anxiety.
                            </li>
                        </ul>
                    </SwotTab>
                </div>
            </div>
            <div className={'my-5'}>
                <p className={'my-5 text-xl font-bold uppercase'}>SWOT Analysis of the General State of Dermatological
                    Diseases and Treatments:</p>
                <div className={'grid grid-cols-4 gap-4'}>
                    <DataTab title={'Medication 1:'} icon={'/product.svg'}>
                        <ul className={'p-5 flex flex-col gap-5'}>
                            <li className={'list-disc'}><strong>Strengths</strong><br/>High efficacy in treating eczema
                                and psoriasis, rapid symptom relief.
                            </li>
                            <li className={'list-disc'}><strong>Weaknesses</strong><br/>High cost, side effects
                                (dryness, allergies).
                            </li>
                            <li className={'list-disc'}><strong>Opportunities</strong><br/>SPotential for combination
                                with other medications, expanding accessibility.
                            </li>
                            <li className={'list-disc'}><strong>Threats</strong><br/>Risk of relapse after
                                discontinuation.
                            </li>
                        </ul>
                    </DataTab>
                    <DataTab title={'Medication 2:'} icon={'/product.svg'}>
                        <ul className={'p-5 flex flex-col gap-5'}>
                            <li className={'list-disc'}><strong>Strengths</strong><br/>High efficacy in treating eczema
                                and psoriasis, rapid symptom relief.
                            </li>
                            <li className={'list-disc'}><strong>Weaknesses</strong><br/>High cost, side effects
                                (dryness, allergies).
                            </li>
                            <li className={'list-disc'}><strong>Opportunities</strong><br/>SPotential for combination
                                with other medications, expanding accessibility.
                            </li>
                            <li className={'list-disc'}><strong>Threats</strong><br/>Risk of relapse after
                                discontinuation.
                            </li>
                        </ul>
                    </DataTab>
                    <DataTab title={'Medication 3:'} icon={'/product.svg'}>
                        <ul className={'p-5 flex flex-col gap-5'}>
                            <li className={'list-disc'}><strong>Strengths</strong><br/>Versatility, can be used for
                                various conditions.
                            </li>
                            <li className={'list-disc'}><strong>Weaknesses</strong><br/>Long time to achieve results.
                            </li>
                            <li className={'list-disc'}><strong>Opportunities</strong><br/>Development of new forms of
                                the drug for faster effect.
                            </li>
                            <li className={'list-disc'}><strong>Threats</strong><br/>High level of competition from
                                newer treatments.
                            </li>
                        </ul>
                    </DataTab>

                </div>
            </div>
            <div className={'my-5'}>
                <p className={'my-5 text-xl font-bold uppercase'}>Target Audience Analysis Using the ABC Method:</p>
                <div className={'grid grid-cols-3 gap-4'}>
                    <SwotTab title={'A-Segment  (80% of total consumption):'} label={'A'}>
                        <div className={'border-l-2 border-white p-2'}>
                            <div className={'flex flex-col gap-3'}>
                                <div className={'flex items-center flex-wrap justify-between gap-2'}>
                                    <div className={'flex items-center gap-1'}>
                                        <img src={'/person.svg'}/>
                                        <p>Age: 30-50</p>
                                    </div>
                                    <div className={'flex items-center gap-1'}>
                                        <img src={'/condition.svg'}/>
                                        <p>Main conditions: Eczema, psoriasis</p>
                                    </div>
                                    <div className={'flex items-center gap-1'}>
                                        <img src={'/region-mini.svg'}/>
                                        <p>Regions: Île-de-France, Provence-Alpes-Côte d Azur</p>
                                    </div>
                                </div>
                                <p className={'font-bold'}>Patients in this category prefer more expensive and effective
                                    medications, frequently
                                    make repeat purchases, and highly value quality.</p>
                            </div>
                        </div>
                    </SwotTab>
                    <SwotTab title={'B-Segment \n' +
                        '(15% of total consumption):'} label={'B'}>
                        <div className={'border-l-2 border-white p-2'}>
                            <div className={'flex flex-col gap-3'}>
                                <div className={'flex items-center flex-wrap justify-between gap-2'}>
                                    <div className={'flex items-center gap-1'}>
                                        <img src={'/person.svg'}/>
                                        <p>Age: 18-30</p>
                                    </div>
                                    <div className={'flex items-center gap-1'}>
                                        <img src={'/condition.svg'}/>
                                        <p>Main conditions: Acne, dermatitis</p>
                                    </div>
                                    <div className={'flex items-center gap-1'}>
                                        <img src={'/region-mini.svg'}/>
                                        <p>Regions: Auvergne-Rhône-Alpes, Occitanie</p>
                                    </div>
                                </div>
                                <p className={'font-bold'}>These patients tend to choose more affordable yet effective
                                    medications, seeking a balance between price and quality.</p>
                            </div>
                        </div>
                    </SwotTab>
                    <SwotTab title={'C-Segment (5% of total consumption):'} label={'C'}>
                        <div className={'border-l-2 border-white p-2'}>
                            <div className={'flex flex-col gap-3'}>
                                <div className={'flex items-center flex-wrap justify-between gap-2'}>
                                    <div className={'flex items-center gap-1'}>
                                        <img src={'/person.svg'}/>
                                        <p>Age: Under 18 and over 65 years</p>
                                    </div>
                                    <div className={'flex items-center gap-1'}>
                                        <img src={'/condition.svg'}/>
                                        <p>Main conditions: Allergic rashes, rosacea</p>
                                    </div>
                                    <div className={'flex items-center gap-1'}>
                                        <img src={'/region-mini.svg'}/>
                                        <p>Regions: Bretagne, Normandier</p>
                                    </div>
                                </div>
                                <p className={'font-bold'}>Patients in this segment are less active in treatment and
                                    often require maintenance therapy or preventive measures.</p>
                            </div>
                        </div>
                    </SwotTab>
                </div>
            </div>
            <div className={'my-5'}>
                <p className={'my-5 text-xl font-bold uppercase'}>Target Audience Analysis Using the XYZ Method:</p>
                <div className={'grid grid-cols-3 gap-4'}>
                    <SwotTab title={'X-Segment \n' +
                        '(Stable consumption):'} label={'X'}>
                        <div className={'border-l-2 border-white p-2'}>
                            <div className={'flex flex-col gap-3'}>
                                <p className={'font-black text-xl'}>Medication 1:</p>
                                <p className={'font-bold'}>Patients with chronic conditions (eczema, psoriasis), continuous use for maintaining remission.</p>
                            </div>
                        </div>
                    </SwotTab>
                    <SwotTab title={'Y-Segment \n' +
                        '(Moderate consumption):'} label={'Y'}>
                        <div className={'border-l-2 border-white p-2'}>
                            <div className={'flex flex-col gap-3'}>
                                <p className={'font-black text-xl'}>Medication 2:</p>
                                <p className={'font-bold'}>Patients who use the medication for acute symptoms and rarely return to it after remission.</p>
                            </div>
                        </div>
                    </SwotTab>
                    <SwotTab title={'Z-Segment \n' +
                        '(Irregular consumption):'} label={'Z'}>
                        <div className={'border-l-2 border-white p-2'}>
                            <div className={'flex flex-col gap-3'}>
                                <p className={'font-black text-xl'}>Medication 3:</p>
                                <p className={'font-bold'}>Patients using the drug as part of combination therapy or during unstable relapses..</p>
                            </div>
                        </div>
                    </SwotTab>

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
