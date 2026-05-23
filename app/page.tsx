import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Hero Section */}
      <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center sm:text-left sm:py-24 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/50 mb-4">
              Backend Language Focus
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
              Go <span className="text-cyan-400">(Golang)</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
              Diseñado por Google para crear software rápido, confiable y altamente escalable. La fuerza que impulsa a herramientas como Docker y Kubernetes.
            </p>
          </div>
          {/* Un elemento visual simulando el logo o la esencia limpia de Go */}
          <div className="text-7xl font-mono text-cyan-400 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl shadow-cyan-950/10 hidden sm:block select-none">
            {"go{}"}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        
        {/* Sección: Por qué elegir Go */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight border-l-4 border-cyan-500 pl-4">
            ¿Por qué destaca en el Backend?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-slate-950/40 rounded-xl border border-slate-800/60 hover:border-slate-700 transition">
              <div className="text-cyan-400 text-2xl font-bold mb-3">01. Rendimiento</div>
              <h3 className="text-lg font-semibold text-white mb-2">Compilado a código nativo</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Al no depender de una máquina virtual pesada o un intérprete, se ejecuta casi a la velocidad de C o C++, ideal para microservicios de alta carga.
              </p>
            </div>

            <div className="p-6 bg-slate-950/40 rounded-xl border border-slate-800/60 hover:border-slate-700 transition">
              <div className="text-cyan-400 text-2xl font-bold mb-3">02. Concurrencia</div>
              <h3 className="text-lg font-semibold text-white mb-2">Goroutines nativas</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Maneja millones de peticiones simultáneas utilizando una fracción de la memoria RAM gracias a sus hilos ligeros administrados por el runtime de Go.
              </p>
            </div>

            <div className="p-6 bg-slate-950/40 rounded-xl border border-slate-800/60 hover:border-slate-700 transition">
              <div className="text-cyan-400 text-2xl font-bold mb-3">03. Simplicidad</div>
              <h3 className="text-lg font-semibold text-white mb-2">Solo 25 palabras clave</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Diseñado para evitar la complejidad innecesaria. Es extremadamente fácil de leer, mantener y escalar en equipos de desarrollo grandes.
              </p>
            </div>

          </div>
        </section>

        {/* Sección: Código de ejemplo */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Sintaxis limpia e intuitiva
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crear un servidor HTTP en Go no requiere de frameworks gigantescos. Su librería estándar (`net/http`) es tan potente que muchas aplicaciones corporativas no usan dependencias externas para el enrutamiento básico.
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-500 block font-mono">Librería clave: net/http</span>
              <span className="text-xs text-slate-500 block font-mono">Consumo mínimo de recursos</span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800/60 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="text-slate-500 ml-2 text-xs">main.go</span>
            </div>
            <pre className="p-6 overflow-x-auto text-slate-300 leading-relaxed">
{`package main

import (
    "fmt"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "¡Hola desde el backend en Go!")
}

func main() {
    http.HandleFunc("/", helloHandler)
    fmt.Println("Servidor corriendo en http://localhost:8080")
    http.ListenAndServe(":8080", nil)
}`}
            </pre>
          </div>
        </section>

        {/* Sección: Quién lo usa */}
        <section className="text-center py-8 bg-slate-950/20 rounded-2xl border border-slate-800/40 p-8">
          <h2 className="text-xl font-semibold text-white mb-6">Empresas que confían en Go para su infraestructura</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60 text-sm font-medium tracking-wider uppercase text-slate-400">
            <span>Google</span>
            <span>Uber</span>
            <span>Netflix</span>
            <span>Twitch</span>
            <span>Dropbox</span>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 bg-slate-950/30 py-8 text-center text-xs text-slate-500">
        <p>Next.js Backend Showroom • Construído en una sola vista compilada.</p>
      </footer>
    </div>
  );
}