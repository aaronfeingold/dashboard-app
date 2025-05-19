import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import "./App.css";

const Users = () => {
  return (
    <main className="py-6 px-4">
      <h1 className="text-2xl font-semibold text-gray-800">Users</h1>
      <p className="mt-4 text-gray-600">User management page coming soon.</p>
    </main>
  );
};

const Settings = () => {
  return (
    <main className="py-6 px-4">
      <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
      <p className="mt-4 text-gray-600">Settings page coming soon.</p>
    </main>
  );
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
