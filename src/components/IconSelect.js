import React from 'react';
import { MDBIcon } from 'mdbreact';

const IconSelect = (props) => {
    let icon = '';
    switch (props.sector) {
        case 'Financial':
            icon = 'building';
            break;
        case 'Entertainment':
            icon = 'video';
            break
        case 'Personal Finance':
            icon = 'building';
            break;
        default:
            icon = 'building';
            break;
    }
    return (
        <>
            <MDBIcon icon={icon} />
        </>
    );
};

export default IconSelect;