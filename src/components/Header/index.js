// import { useState } from "react";
import Hamburger from "./Hamburger";
import { LeftSection } from "./Header.styles";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: 60,
        alignItems: "center",
        backgroundImage: "linear-gradient(135deg, #A71D31 10%, #3F0D12 100%)",
        width: "100%",
        position: "fixed",
        zIndex: "100",
      }}
    >
      <LeftSection>
        <h1>Portfolio</h1>
      </LeftSection>
      <Hamburger />
    </div>
  );
};
export default Header;
