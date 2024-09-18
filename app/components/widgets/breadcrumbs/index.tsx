"use client"
import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

const Index = () => {

    const pathName = usePathname()

    const getBreadCrumb = (pathName: string) => {
        switch (pathName) {
            case '/':
                return [{title: 'Dashboard', link: '/'}]
            case '/region/Ile-de-France':
                return [{title: 'Dashboard', link: '/'},{title: 'Ile-de-France', link: '/region/Ile-de-France'}]
            case '/region/Provence-Alpes-Cote-d-Azur':
                return [{title: 'Dashboard', link: '/'},{title: 'Provence-Alpes-Cote-d-Azur', link: '/region/Provence-Alpes-Cote-d-Azur'}]
            case '/age/30-50':
                return [{title: 'Dashboard', link: '/'},{title: '30-50 years', link: '/age/30-50'}]
            case '/age/18-30':
                return [{title: 'Dashboard', link: '/'},{title: '18-30 years', link: '/age/18-30'}]
            case '/product/Product-1':
                return [{title: 'Dashboard', link: '/'},{title: 'Product 1', link: '/product/Product-1'}]
            case '/product/Product-2':
                return [{title: 'Dashboard', link: '/'},{title: 'Product 2', link: '/product/Product-2'}]
            default:
                return []
        }
    }

    const getButtons = (pathName: string) => {
        switch (pathName) {
            case '/':
                return [<Link href={'/swot'} key={1}
                              className={'bg-white p-2 px-4 rounded-xl flex items-center justify-center gap-2 text-[#0C5C63] font-bold font-inter'}>
                    <p>SWOT Analysis</p>
                    <img src={'swot.svg'}/>
                </Link>]
            case '/product/Product-1':
                return [
                    <Link href={'/swot'} key={2}
                          className={'bg-white p-2 px-4 rounded-xl flex items-center justify-center gap-2 text-[#0C5C63] font-bold font-inter'}>
                        <p>Feedback</p>
                        <img src={'/feedback_green.svg'}/>
                    </Link>
                ]
            case '/product/Product-2':
                return [
                    <Link href={'/swot'} key={3}
                          className={'bg-white p-2 px-4 rounded-xl flex items-center justify-center gap-2 text-[#0C5C63] font-bold font-inter'}>
                        <p>Feedback</p>
                        <img src={'/feedback_green.svg'}/>
                    </Link>
                ]

            default:
                return [<></>]
        }
    }

    return (
        <div className={'flex items-center w-full justify-between'}>
            {/*{pathName}*/}
            <div className={'flex items-center gap-3'}>
                {getBreadCrumb(pathName).map((crumb, counter) => {
                    if (counter === 0) {
                        return (
                            <Link key={counter}
                                className={'text-white text-xl font-inter hover:underline transition-all duration-500'}
                                href={crumb.link}>{crumb.title}</Link>
                        )
                    } else {
                        return (
                            <div key={counter} className={'flex items-center gap-3'}>
                                <p className={'text-white text-xl font-inter'}>/</p>
                                <Link
                                    className={'text-white text-xl font-inter hover:underline transition-all duration-500'}
                                    href={crumb.link}>{crumb.title}</Link>
                            </div>
                        )
                    }
                })}
            </div>
            <div className={'flex items-center gap-3'}>
                {getButtons(pathName).map((button) => {
                    return button
                })}
            </div>
        </div>
    );
};

export default Index;