import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Find from "./components/Find";
 
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";
import "./styles/SingleDog.css";
import SingleDog from "./components/SingleDog";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Find" element={<Find/>} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:name" element={<SingleDog />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
