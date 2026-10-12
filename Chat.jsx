import { useState } from "react";

const WORKER_URL = "https://nexora-chat.imiffu0507.workers.dev";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim() || loading) return;
    const next = [...messages, { role: "user", content: input }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setMessages([...next, { role: "assistant", content: "Error, try again." }]);
    }
    setLoading(false);
  }

  return (
    <div>
      {messages.map((m, i) => (
        <div key={i} style={{ textAlign: m.role === "user" ? "right" : "left", margin: "8px 0" }}>
          <span
            style={{
              background: m.role === "user" ? "#111" : "#f2f2ee",
              color: m.role === "user" ? "#fff" : "#111",
              padding: "10px 14px",
              borderRadius: 14,
              display: "inline-block",
              maxWidth: "80%",
              whiteSpace: "pre-wrap",
              textAlign: "left",
            }}
          >
            {m.content}
          </span>
        </div>
      ))}
      {loading && <p>NEXORA is thinking...</p>}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your idea..."
        style={{ width: "100%", boxSizing: "border-box" }}
      />
      <button onClick={send}>Send ✨</button>
    </div>
  );
}
