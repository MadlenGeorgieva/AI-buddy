function ChatThreadItem(props) {
  return (
    <li className="chat-thread-item">
      <a href={props.href} className="chat-thread-link">
        {props.title}
      </a>
    </li>
  );
}

export default function ChatThreadsList(props) {
  return (
    <aside className="sidebar-ChatThreadsList">
      <nav className="chat-threads-list" aria-label="Chat threads">
        <ul>
          {props.threads.map((thread) => (
            <ChatThreadItem
              key={thread.id}
              href={thread.href}
              title={thread.title}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}