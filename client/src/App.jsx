import { Navbar, Footer, Welcome, Services } from "./components/index";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Market from "./components/Market";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("userData"));

  return (
    <AuthContext.Provider value={{ isAuth: isAuth, setIsAuth }}>
      <div className="min-h-screen">
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
    </AuthContext.Provider>
  );
};

export default App;
