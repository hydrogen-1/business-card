import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Links from "./components/Links";

function App() {
  return (
    <>
      <div className="content">
        <Info />
        <About />
        <Interests />
      </div>
      <Links />
    </>
  );
}

export default App;
