import React from 'react';

// Datos de las bases de datos
const DATABASES = [
  {
    name: 'PostgreSQL',
    description: 'La base de datos relacional más avanzada. Perfecta para integridad de datos masiva.',
    compatible: ['TypeScript', 'Java', 'Rust', 'Go'],
    icon: '🐘',
    type: 'SQL'
  },
  {
    name: 'MongoDB',
    description: 'Líder en NoSQL. Ideal para manejar JSON de forma nativa y escalar rápido.',
    compatible: ['TypeScript', 'Python'],
    icon: '🍃',
    type: 'NoSQL'
  },
  {
    name: 'Redis',
    description: 'Estructura de datos en memoria. La velocidad pura para sistemas de caché.',
    compatible: ['Go', 'Rust', 'Python', 'TypeScript'],
    icon: '⚡',
    type: 'In-Memory'
  },
  {
    name: 'Pinecone',
    description: 'Base de datos vectorial optimizada para buscar embeddings de IA y LLMs.',
    compatible: ['Python', 'TypeScript'],
    icon: '🌲',
    type: 'Vectorial'
  }
];

export default function DatabasePage() {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <style>{`
        .db-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 40px;
        }
        .db-card {
          background: #0f172a;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 30px;
          transition: all 0.3s ease;
        }
        .db-card:hover {
          border-color: #00d67d;
          transform: translateY(-5px);
          background: #1e293b;
        }
        .db-icon-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        .db-icon-box {
          background: rgba(0, 214, 125, 0.1);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          font-size: 24px;
        }
        .db-name {
          font-size: 20px;
          font-weight: 800;
          margin: 0;
          color: white;
        }
        .db-type-tag {
          color: #00d67d;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .db-desc {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.6;
        }
        .lang-tag {
          background: #1e3a8a;
          color: #bfdbfe;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 8px;
          text-transform: uppercase;
        }
      `}</style>

      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', color: 'white', margin: 0 }}>
          Data <span style={{ color: '#00d67d' }}>Centers</span>
        </h1>
        <p style={{ color: '#64748b', fontSize: '18px' }}>Las mejores bases de datos para tu stack.</p>
      </header>

      <div className="db-grid">
        {DATABASES.map((db, index) => (
          <article key={index} className="db-card">
            <div className="db-icon-header">
              <div className="db-icon-box">{db.icon}</div>
              <div>
                <h2 className="db-name">{db.name}</h2>
                <span className="db-type-tag">{db.type}</span>
              </div>
            </div>
            
            <p className="db-desc">{db.description}</p>
            
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '11px', color: '#475569', fontWeight: 'bold', marginBottom: '10px' }}>COMPATIBLE CON:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {db.compatible.map((lang) => (
                  <span key={lang} className="lang-tag">{lang}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}