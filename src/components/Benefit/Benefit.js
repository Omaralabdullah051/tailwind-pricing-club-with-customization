import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = (props) => {

    return (
        <div>
            <p className='flex items-center px-2 text-body'><CheckCircleIcon className='check-circle-icon'></CheckCircleIcon>{props.benefit}</p>
        </div>
    );
};

export default Benefit;