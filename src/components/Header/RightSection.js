import React from 'react';
import { Ul } from './Header.styles';

const RightSection = ({open}) => {
    return (
        <Ul open={open}>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </Ul>
    );
};

export default RightSection;