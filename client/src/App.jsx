import {
  Navbar,
  Footer,
  Welcome,
  Services,
  Transactions,
  Login,
  Register,
} from "./components/index";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthContext from "./context/AuthContext";

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
          <Route path="/market" element={<Transactions />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
