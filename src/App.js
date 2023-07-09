import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div style={{backgroundImage: "linear-gradient(315deg, #414141 0%, #000000 74%)",backgroundColor: "#000000", height: "100vh"}}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
