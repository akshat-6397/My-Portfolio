import React from 'react';
import { Ul } from './Header.styles';
import {Link} from 'react-scroll';

const RightSection = ({open}) => {

    // const[active, setActive] = useState("home");
    return (
        <Ul open={open}>
            <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
            <li><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-120} duration={500}>Skills</Link></li>
            <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={-110} duration={500}>Projects</Link></li>
            <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-120} duration={500}>Contact</Link></li>
        </Ul>
    );
};

export default RightSection;