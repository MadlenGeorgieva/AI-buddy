import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";

export default function Layout() {
  return (
    <div className="app-layout">
     <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
