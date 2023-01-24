import "./App.scss";

// Pages
import Footer from "./components/Footer/Footer";
import Futer from "./components/Futer/Futer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MainBottom from "./components/Main-bottom/Main-boottom";
import MainSenter from "./components/Main-senter/Main-senter";
import Main from "./components/Main/Main";
import Widget from "./components/Widget/widget";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <MainSenter />
      <MainBottom />
      <Futer />
      <Widget />
      <Footer />
    </>
  );
}
export default App;