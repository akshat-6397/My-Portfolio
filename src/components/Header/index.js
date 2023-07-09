// import { useState } from "react";
import Hamburger from "./Hamburger";
import { LeftSection} from "./Header.styles";

const Header = () => {
    return(
        <div style={{display: "flex", justifyContent: "space-between", height: 60, alignItems: "center", background: "green", width: "100%", position: "fixed"}}>
            <LeftSection>
                <h1>Portfolio</h1>
            </LeftSection>
            <Hamburger/>
        </div>
    )
};
export default Header;