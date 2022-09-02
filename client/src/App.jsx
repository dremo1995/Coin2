import { Navbar, Footer, Welcome, Services, Market } from "./components/index";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen gradient-bg-transactions">
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/services" element={<Services />} />
        <Route path="/market" element={<Market />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
