import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PriceOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='card-container'>
            <h5 className='card-name'>{name}</h5>
            <p>
                <span className='card-price'>{price}</span>
                <span className='/mo-style'>/mo</span>
            </p>
            <div>
                <p className='card-benefits'>Benefits:</p>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='btn-style hover:make-rotate'>Buy Now <ArrowRightIcon className='w-4 h-4 ml-1'></ArrowRightIcon></button>
        </div>
    );
};

export default PriceOption;