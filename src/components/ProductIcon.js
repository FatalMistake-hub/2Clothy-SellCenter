import React from 'react';
import classNames from 'classnames';

function ProductIcon({ src, alt ,size='w-20 h-20'}) {
    
    return (
        <>
            <div className={`relative rounded-md inline-block ${size} hidden mr-4 md:block`}>
                <img className="object-cover w-full h-full rounded-md" src={src} alt={alt} loading="lazy" />
            </div>
        </>
    );
}

export default ProductIcon;
