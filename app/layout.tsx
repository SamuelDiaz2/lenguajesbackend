import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';
import SWRegistration from "./SWRegistration";

export const metadata: Metadata = {
  title: "Backend 2026",
  description: "Guía de lenguajes y bases de datos",
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <style>{`
          /* Forzamos la tipografía de Next.js en todo el sitio */
          :root {
            --font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          }

          body {
            margin: 0;
            background: #020617;
            font-family: var(--font-family);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .nav-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 20px;
            display: flex;
            gap: 15px;
            z-index: 1000;
            background: rgba(2, 6, 23, 0.7);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .btn-nav {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 22px;
            border-radius: 18px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.2s ease;
            font-family: var(--font-family);
            font-size: 15px;
            letter-spacing: -0.01em;
          }

          .btn-blue {
            background: #0047ff;
            color: white;
            box-shadow: 0 4px 20px rgba(0, 71, 255, 0.3);
          }

          .btn-green {
            background: #00d67d;
            color: #020617;
            box-shadow: 0 4px 20px rgba(0, 214, 125, 0.3);
          }

          .btn-nav:hover {
            transform: scale(1.02);
            filter: brightness(1.1);
          }

          .logo-n {
            background: black;
            color: white;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-style: italic;
            font-weight: 900;
            font-size: 13px;
            border: 1px solid rgba(255,255,255,0.2);
          }

          .main-content {
            padding-top: 100px;
          }
        `}</style>
      </head>
      <body>
        <SWRegistration />
        <header className="nav-container">
          <Link href="/" className="btn-nav btn-blue">
            <span style={{fontSize: '18px'}}>💻</span>
            <span>Lenguajes</span>
          </Link>

          <Link href="/bases-de-datos" className="btn-nav btn-green">
            <span style={{fontSize: '18px'}}>📂</span>
            <span>Bases de Datos</span>
          </Link>
        </header>

        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}