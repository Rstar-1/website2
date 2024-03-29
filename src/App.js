import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Error from "./website/error/Error";
import Navbar from "./website/navbar/Navbar";
import Footer from "./website/footer/Footer";
import Home from "./website/pages/home/Home";
import ScrollToTop from "./website/scrolltotop/ScrollToTop";
import Service from "./website/pages/service/Service";
import Service2 from "./website/pages/service2/Service2";
import ServiceDetails from "./website/pages/servicedetails/ServiceDetails";
import Team from "./website/pages/team/Team";
import About from "./website/pages/about/About";
import Connect from "./website/pages/connect/Connect";
import Gallery from "./website/pages/gallery/Gallery";
import Blog from "./website/pages/blog/Blog";
import Home2 from "./website/pages/home2/Home2";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service2" element={<Service2 />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/teams" element={<Team />} />
          {/* ======================= End-pages ======================= */}

          {/* ======================= Start-Error ======================= */}
          <Route path="*" element={<Error />} />
          {/* ======================= End-Error ======================= */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
