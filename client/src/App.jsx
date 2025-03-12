import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import ScrollToTop from "./utils/ScrollToTop";
import { Routes, Route } from "react-router";
import Stories from "./pages/Stories";
import Story from "./pages/Story";

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/story/:id" element={<Story />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
