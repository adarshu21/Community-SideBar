import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import CommunityProfile from "./components/CommunityProfile";


function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage" element={<Users />} />
          <Route path="/feed" element={<Messages />} />
          <Route path="/service" element={<Analytics />} />
          <Route path="/events" element={<FileManager />} />
          <Route path="/monetize" element={<Order />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
      <div>
        <CommunityProfile />
      </div>
    </Router>
  );
}

export default App;
