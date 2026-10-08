import "./styles.css";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const features = [
  ["💡", "Ideas", "Share an idea and turn it into a clearer, stronger concept."],
  ["📝", "Notes", "Create and share useful study and knowledge notes."],
  ["📚", "Study", "Explore subjects, chapters, concepts and learning resources."],
  ["🎥", "Videos", "Discover educational videos and learn at your own pace."],
  ["👥", "Community", "Share, discuss, follow and learn with other people."],
  ["🌍", "Languages", "Learn and share across multiple languages."],
];

const learning = [
  ["📖", "Notes", "Short, useful notes for quick learning."],
  ["▶️", "Videos", "Educational video content in one place."],
  ["🧠", "Concepts", "Simple explanations for difficult topics."],
];

function App() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");
  const [language, setLanguage] = useState("English");

  function refineIdea() {
    const clean = idea.trim();
    if (!clean) {
      setResult("First, type your idea above.");
      return;
    }
    setResult(
      `Your idea: “${clean}”\n\nNEXORA suggestion:\n• Who is it for?\n• What problem does it solve?\n• What are the 3 most important features?\n• What makes it different?\n• What should be the first small step?`
    );
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">NEXORA</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#learn">Learn</a>
          <a href="#about">About</a>
        </nav>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option>English</option>
          <option>Tamil</option>
          <option>Telugu</option>
          <option>Hindi</option>
          <option>Malayalam</option>
        </select>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <span className="eyebrow">IDEAS • KNOWLEDGE • COMMUNITY</span>
            <h1>Turn your ideas into <span>possibilities.</span></h1>
            <p>
              NEXORA is a place to share ideas, improve them, learn, create notes,
              watch educational content and grow with a community.
            </p>
            <a className="button" href="#idea">Share an Idea →</a>
          </div>
          <div className="hero-card">
            <div className="orb">✦</div>
            <div>
              <b>IDEA → REFINE → BETTER IDEA</b>
              <p>Start with a thought. NEXORA helps you explore what it can become.</p>
            </div>
          </div>
        </section>

        <section id="idea" className="idea-section">
          <div>
            <span className="eyebrow">NEXORA AI</span>
            <h2>What’s your idea?</h2>
            <p>Write it in simple words. We’ll help you think through the next steps.</p>
          </div>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Example: Students-ku oru study app create pannalaam..."
          />
          <button className="button" onClick={refineIdea}>Refine My Idea ✨</button>
          {result && <pre className="result">{result}</pre>}
        </section>

        <section id="explore" className="section">
          <span className="eyebrow">EXPLORE NEXORA</span>
          <h2>One platform. Many possibilities.</h2>
          <div className="grid">
            {features.map(([icon, title, text]) => (
              <article className="card" key={title}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="learn" className="section learn">
          <div>
            <span className="eyebrow">LEARNING</span>
            <h2>Learn something new.</h2>
            <p>Build a knowledge space where learning feels simple and social.</p>
          </div>
          <div className="learning-grid">
            {learning.map(([icon, title, text]) => (
              <article className="learning-card" key={title}>
                <span>{icon}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="vision">
          <span className="eyebrow">OUR VISION</span>
          <h2>Learn. Share. Improve. Grow.</h2>
          <p>
            NEXORA brings ideas and knowledge together so people can learn from
            each other and turn simple thoughts into meaningful possibilities.
          </p>
        </section>
      </main>

      <footer>
        <strong>NEXORA</strong>
        <span>Ideas In. Possibilities Out.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
