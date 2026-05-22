import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LeakScanner from "./pages/LeakScanner";
import DarkWeb from "./pages/DarkWeb";
import BrowserMonitor from "./pages/BrowserMonitor";
import Recommendations from "./pages/Recommendations";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
        <Route path="/scanner" element={ <ProtectedRoute> <LeakScanner /></ProtectedRoute> } />
        <Route path="/darkweb" element={ <ProtectedRoute> <DarkWeb /> </ProtectedRoute>} />
        <Route path="/browser-monitor" element={ <ProtectedRoute> <BrowserMonitor /> </ProtectedRoute>} />
        <Route path="/recommendations" element={ <ProtectedRoute> <Recommendations /> </ProtectedRoute>}  />
      <Route path="/signup" element={ <ProtectedRoute> <Signup /> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;