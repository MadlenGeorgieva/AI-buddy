function ChatThreadItem(props) {
  return (
    <li className="chat-thread-item">
      <a href={props.href} className="chat-thread-link">
        {props.title}
      </a>
    </li>
  );
}

export default function ChatThreadsList() {
  return (
    <aside className="sidebar-ChatThreadsList">
      {/* Chat threads list */}
      <nav className="chat-threads-list" aria-label="Chat threads">
        <ul>
          <ChatThreadItem
            href="/chat/how-to-learn-programming"
            title="How to learn programming?"
          />
          <ChatThreadItem
            href="/chat/best-pizza-toppings"
            title="What are the best pizza toppings?"
          />
          <ChatThreadItem
            href="/chat/explain-quantum-physics"
            title="Can you explain quantum physics?"
          />
          <ChatThreadItem
            href="/chat/morning-routine-ideas"
            title="Help me create a morning routine"
          />
          <ChatThreadItem
            href="/chat/weekend-activity-suggestions"
            title="What should I do this weekend?"
          />
          <ChatThreadItem href="/chat/why-sky-blue" title="Why is the sky blue?" />
          <ChatThreadItem
            href="/chat/learn-new-language"
            title="How do I learn a new language?"
          />
          <ChatThreadItem href="/chat/meaning-of-life" title="What's the meaning of life?" />
          <ChatThreadItem href="/chat/funny-joke-please" title="Tell me a funny joke" />
          <ChatThreadItem
            href="/chat/healthy-dinner-ideas"
            title="What's a healthy dinner idea?"
          />
          <ChatThreadItem
            href="/chat/good-book-recommendations"
            title="Recommend me a good book"
          />
          <ChatThreadItem
            href="/chat/creative-writing-prompt"
            title="Give me a creative writing prompt"
          />
          <ChatThreadItem href="/chat/fix-slow-computer" title="My computer is slow, help?" />
          <ChatThreadItem
            href="/chat/interesting-history-fact"
            title="Tell me an interesting history fact"
          />
        </ul>
      </nav>
    </aside>
  );
}