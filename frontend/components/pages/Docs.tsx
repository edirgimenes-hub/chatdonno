import React from 'react';
import { Book, FileText, Settings, PlayCircle } from 'lucide-react';

export const DocsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 animate-fade-in-up">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 flex-shrink-0">
        <h3 className="font-bold text-slate-900 mb-4 px-3">Documentação</h3>
        <ul className="space-y-1">
          <li><a href="#" className="block px-3 py-2 rounded-lg bg-violet-50 text-violet-700 font-medium">Introdução</a></li>
          <li><a href="#" className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">Instalação</a></li>
          <li><a href="#" className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">Autenticação</a></li>
          <li><a href="#" className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">Componentes</a></li>
          <li><a href="#" className="block px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50">API Reference</a></li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Começando com ChatDonno</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Bem-vindo à documentação oficial. Aprenda como integrar, customizar e estender o ChatDonno em suas aplicações web.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Nota:</strong> A versão 2.0 introduziu suporte nativo a streaming de respostas. Verifique se você atualizou suas dependências.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-slate-200 p-6 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
            <PlayCircle className="text-violet-600 mb-3" size={28} />
            <h3 className="font-bold text-slate-900 mb-2">Quick Start</h3>
            <p className="text-slate-500 text-sm">Instale e configure seu primeiro bot em menos de 5 minutos.</p>
          </div>
          <div className="border border-slate-200 p-6 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
            <Settings className="text-fuchsia-600 mb-3" size={28} />
            <h3 className="font-bold text-slate-900 mb-2">Configuração</h3>
            <p className="text-slate-500 text-sm">Aprenda sobre temas, personalidades de IA e regras de negócio.</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Conceitos Básicos</h2>
          <p className="text-slate-600 mb-4">
            O ChatDonno funciona injetando um widget leve no seu DOM. Ele se comunica com nossa API via WebSockets para garantir latência mínima.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Exemplo de Integração HTML</h3>
          <pre className="bg-slate-900 text-slate-300 p-4 rounded-xl overflow-x-auto text-sm font-mono">
{`<script src="https://cdn.chatdonno.com/widget.js"></script>
<script>
  ChatDonno.init({
    appId: "seu-app-id",
    theme: "light"
  });
</script>`}
          </pre>
        </div>
      </div>
    </div>
  );
};