import React, { useState } from 'react';
import { Ul } from './Header.styles';
import { HashLink as Link } from 'react-router-hash-link';

const RightSection = ({open}) => {

    const[active, setActive] = useState("home");
    return (
        <Ul open={open}>
            <li><Link className={active === "home" ? 'active':''} smooth to="#home" onClick={() => setActive("home")}>Home</Link></li>
            <li><Link className={active === "about" ? 'active':''} smooth offset={-100} to="#about" onClick={() => setActive("about")}>About</Link></li>
            <li><Link className={active === "skills" ? 'active':''} smooth offset={-100} to="#skills" onClick={() => setActive("skills")}>Skills</Link></li>
            <li><Link className={active === "projects" ? 'active':''} smooth offset={-100} to="#projects" onClick={() => setActive("projects")}>Projects</Link></li>
            <li><Link className={active === "contact" ? 'active':''} smooth to="#contact"  onClick={() => setActive("contact")}>Contact</Link></li>
        </Ul>
    );
};

export default RightSection;