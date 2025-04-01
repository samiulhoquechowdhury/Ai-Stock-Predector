import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

interface User {
  // Define user object structure here
  // For example:
  id: string;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-gray-100">
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
