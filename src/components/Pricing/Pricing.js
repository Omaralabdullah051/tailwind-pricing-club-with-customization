import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'lifetime free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals',
                'hot deals',
                'super-duper deals',
                'crash deals',
                'top-class deals',
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'everything on free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals',
                'hot deals',
                'super-duper deals',
                'crash deals',
                'high-class deals',
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'everything on regular',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals',
                'hot deals',
                'super-duper deals',
                'crash deals',
                'master-class deals',
            ]
        },
    ]
    return (
        <div className='club-container'>
            <h1 className='club-text'>Best Deals of the town</h1>
            <p className='mt-2 mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, porro ex! Tenetur, reprehenderit. Consectetur blanditiis culpa fugit ab eveniet nesciunt?</p>
            <div className='cards-container'>
                {pricingOption.map(option => <PriceOption
                    key={option.id}
                    option={option}
                ></PriceOption>)}
            </div>
        </div>
    );
};

export default Pricing;