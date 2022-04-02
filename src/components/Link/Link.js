import React from 'react';

const Link = (props) => {
    const { name, link } = props.route;
    return (
        <div>
            <li className='mr-16'><a className='hover:text-orange-900' href={link}>{name}</a></li>
        </div>
    );
};

export default Link;