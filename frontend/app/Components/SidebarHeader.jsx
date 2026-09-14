export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Sidebar header */}
        <div className="sidebar-header">
          <h2 className="chatbot-title">Chatbot</h2>
          <a href="/chat/new" className="new-chat-btn">
            + New
          </a>
        </div>
    </aside>
  );
}