import React from 'react';
import { Terminal, Database, Server, Zap, Cpu, Code2 } from 'lucide-react';
import './globals.css'; // Importamos el CSS que creamos arriba

const LANGUAGES = [
  {
    id: 'ts',
    name: 'TypeScript',
    role: 'Fullstack Standard',
    description: 'Seguridad de tipos y el ecosistema más grande del mundo con Node.js.',
    class: 'bg-ts',
    icon: <Code2 size={24} color="white" />,
  },
  {
    id: 'py',
    name: 'Python',
    role: 'AI & Backend',
    description: 'Sencillez y potencia. El estándar para cualquier servicio que use Inteligencia Artificial.',
    class: 'bg-py',
    icon: <Database size={24} color="white" />,
  },
  {
    id: 'go',
    name: 'Go',
    role: 'Cloud & Performance',
    description: 'Diseñado por Google para la nube. Maneja miles de conexiones de forma nativa.',
    class: 'bg-go',
    icon: <Zap size={24} color="white" />,
  },
  {
    id: 'rs',
    name: 'Rust',
    role: 'Memory Safety',
    description: 'El lenguaje más eficiente. Ideal para sistemas críticos y de alto rendimiento.',
    class: 'bg-rs',
    icon: <Cpu size={24} color="white" />,
  },
];

export default function BackendPage() {
  return (
    <main className="backend-container">
      <div className="backend-content">
        <header className="backend-header">
          <div className="header-icon-wrapper">
            <Terminal size={40} />
          </div>
          <h1 className="backend-title">Backend 2026</h1>
          <p className="backend-subtitle">
            Arquitecturas modernas construidas con los mejores lenguajes del ecosistema.
          </p>
        </header>

        <div className="languages-grid">
          {LANGUAGES.map((lang) => (
            <article key={lang.id} className="lang-card">
              <div className={`icon-box ${lang.class}`}>
                {lang.icon}
              </div>
              <h2 className="lang-name">{lang.name}</h2>
              <span className="lang-role">{lang.role}</span>
              <p className="lang-desc">{lang.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}