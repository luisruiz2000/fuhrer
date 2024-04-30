import initAOS from "./aosConfig";
import "./assets/css/App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    initAOS()
  }, [])

  return (
    <>
      <Nav />
      <Header />
    </>
  );
}

export default App;
