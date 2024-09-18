import {FC} from 'react';
import clsx from "clsx";

interface AvailableTabProps {
    title: string,
    status: string
}


const AvailableTab: FC<AvailableTabProps> = ({title, status}) => {
    return (
        <div className={'flex items-center gap-2 justify-between w-full font-inter'}>
            <p className={'text-white'}>{title}</p>
            <p className={clsx('uppercase font-bold', status == 'yes' ? 'text-cMint' : '', status == 'no' ? 'text-cOrange' : '', status == 'limited' ? 'text-white' : '')}>{status}</p>
        </div>
    );
};

export default AvailableTab;