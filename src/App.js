// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./pages/AuthContext";
import ProtectedRoute from "./pages/ProtectRoutes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index element={<LogIn />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
