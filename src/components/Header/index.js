import { useEffect } from "react";
import Hamburger from "./Hamburger";
import { LeftSection } from "./Header.styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  useEffect(() => {
    if (window.innerWidth < 768)
      toast.info("Use Desktop for better experience", {
        position: "top-center",
        theme: "colored",
      });
  }, []);
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
      <ToastContainer />
    </div>
  );
};
export default Header;
