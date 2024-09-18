import {FC, ReactNode} from 'react';

interface IAmountTabProps {
    amount: number;
    children: ReactNode;
}

const AmountTab:FC<IAmountTabProps> = ({amount,children}) => {
    return (
        <div className={'flex items-center gap-8'}>
            <div className={'flex items-center gap-1'}>
                <img src={'/people.svg'}/>
                <p className={'font-inter font-normal text-white text-lg'}>{amount}</p>
            </div>
            <div className={'font-normal text-white'}>
                {children}
            </div>
        </div>
    );
};

export default AmountTab;