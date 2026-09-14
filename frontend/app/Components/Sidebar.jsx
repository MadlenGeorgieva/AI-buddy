 import SidebarHeader from "./SidebarHeader";
 import SidebarFooter from "./SidebarFooter";
 import ChatThreadsList from "./ChatThreadsList";
 
 export default function Sidebar() {
  return (
 <aside className="sidebar">
        <SidebarHeader />
        <ChatThreadsList />
        <SidebarFooter />
      </aside>
    );}