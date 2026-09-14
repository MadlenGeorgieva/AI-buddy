import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import ChatThreadsList from "./ChatThreadsList";

export default function Sidebar(props) {
  return (
    <aside className="sidebar">
      <SidebarHeader />
      <ChatThreadsList threads={props.threads} />
      <SidebarFooter />
    </aside>
  );
}