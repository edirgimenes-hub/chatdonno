import React from 'react';
import { Terminal, Code2, GitBranch } from 'lucide-react';

export const DevelopersPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in-up">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Feito para Desenvolvedores</h2>
          <p className="text-xl text-slate-500 max-w-lg">
            API robusta, componentes React prontos e webhooks para integração total com seu backend.
          </p>
        </div>
        <div className="bg-slate-900 rounded-xl p-6 shadow-2xl w-full md:w-1/2">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <code className="text-sm font-mono text-slate-300">
            <span className="text-fuchsia-400">npm</span> install @chatdonno/react<br/><br/>
            <span className="text-violet-400">import</span> {'{ ChatWidget }'} <span className="text-violet-400">from</span> '@chatdonno/react';<br/><br/>
            <span className="text-slate-500">// Simples assim</span><br/>
            {'<ChatWidget apiKey="key_123" />'}
          </code>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border border-slate-200 rounded-2xl hover:border-violet-300 transition-colors">
          <Terminal className="text-violet-600 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">SDK Completo</h3>
          <p className="text-slate-600 text-sm">
            Bibliotecas oficiais para React, Vue, Angular e Vanilla JS. Controle total sobre eventos e estado.
          </p>
        </div>
        <div className="p-6 border border-slate-200 rounded-2xl hover:border-fuchsia-300 transition-colors">
          <Code2 className="text-fuchsia-600 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">Customização CSS</h3>
          <p className="text-slate-600 text-sm">
            Use Tailwind classes ou CSS puro. O ChatDonno não sequestra seus estilos, ele se adapta a eles.
          </p>
        </div>
        <div className="p-6 border border-slate-200 rounded-2xl hover:border-pink-300 transition-colors">
          <GitBranch className="text-pink-600 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">Webhooks</h3>
          <p className="text-slate-600 text-sm">
            Receba eventos de chat no seu servidor em tempo real para sincronizar com seu CRM ou banco de dados.
          </p>
        </div>
      </div>
    </div>
  );
};