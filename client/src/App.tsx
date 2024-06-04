import About from "./components/About";
import Admin from "./components/Admin";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  function HomePage() {
    return (
      <>
        <Navbar />
        <ImageSlider />
        <About />
        <Cards />
      </>
    )
  }
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/admin" element={ <Admin /> }/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
