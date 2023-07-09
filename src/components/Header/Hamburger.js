import React, { useState } from 'react';
import { StyledBurger } from './Header.styles';
import RightSection from './RightSection';

const Hamburger = () => {
    const[open, setOpen] = useState(false);
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightSection open={open}/>
        </>
    );
};

export default Hamburger;