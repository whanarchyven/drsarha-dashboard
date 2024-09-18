import React, {FC, ReactNode} from 'react';
import clsx from "clsx";

interface SwotTabInterface {
    title:string,
    label:string,
    children:ReactNode,
    className?:string
}


const Index:FC<SwotTabInterface> = ({title, label, children, className}) => {
    return (
        <div
            className={clsx(className, 'w-full hover:border-white transition-all duration-300 border-2 p-6 rounded-2xl bg-black bg-opacity-25 border-transparent flex flex-col justify-between gap-2')}>
            <div className={'flex items-center justify-between gap-3'}>
                <div className={'font-extrabold text-2xl uppercase text-white'}>
                    {title}
                </div>
                <p className={'text-5xl opacity-50 font-black'}>{label}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Index;