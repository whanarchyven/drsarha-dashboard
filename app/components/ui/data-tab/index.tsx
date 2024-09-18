import {FC, ReactNode} from 'react';
import clsx from "clsx";


interface DataTabInterface{
    children:ReactNode,
    title:ReactNode,
    icon:string,
    className?:string,
}

const DataTab:FC<DataTabInterface> = ({children,title,icon,className}) => {
    return (
        <div className={clsx(className,'w-full hover:border-white transition-all duration-300 border-2 p-6 rounded-2xl bg-black bg-opacity-25 border-transparent flex flex-col justify-between gap-2')}>
            <div className={'flex items-start justify-between gap-3'}>
                <div className={'font-extrabold text-xl uppercase text-white'}>
                    {title}
                </div>
                <img src={icon} alt="icon" />
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default DataTab;