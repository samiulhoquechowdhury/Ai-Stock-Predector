import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Login onLogin={setUser} />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
