import React, { useState } from 'react';
import { ChatWidget } from './components/Chat/ChatWidget';
import { Github, ExternalLink, Code2, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from './components/ui/Button';

// Import Pages
import { SolutionsPage } from './components/pages/Solutions';
import { DevelopersPage } from './components/pages/Developers';
import { PricingPage } from './components/pages/Pricing';
import { DocsPage } from './components/pages/Docs';

type Page = 'home' | 'solutions' | 'developers' | 'pricing' | 'docs';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'solutions': return <SolutionsPage />;
      case 'developers': return <DevelopersPage />;
      case 'pricing': return <PricingPage />;
      case 'docs': return <DocsPage />;
      default:
        return (
          <>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-violet-100 text-violet-700 text-xs font-semibold mb-8 shadow-sm animate-fade-in-up">
                <Sparkles size={12} className="text-fuchsia-500" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">
                  Chat Inteligente & Humanizado
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8 animate-fade-in-up [animation-delay:0.1s]">
                Adicione <span className="relative whitespace-nowrap">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600">
                    IA Humanizada
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-fuchsia-100 -z-0 rotate-1"></span>
                </span> ao seu site em segundos.
              </h1>
              
              <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
                O ChatDonno oferece uma interface de bate-papo deslumbrante e consciente do contexto. Destaques marcantes, contexto suave e zero atrito para seus usuários.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.3s]">
                <Button variant="primary" size="lg" className="rounded-full px-10" onClick={() => setCurrentPage('developers')}>
                  <Code2 size={20} className="mr-2" />
                  Começar Integração
                </Button>
                <Button variant="secondary" size="lg" className="rounded-full px-10 bg-white/80 backdrop-blur-sm" onClick={() => setCurrentPage('docs')}>
                  <ExternalLink size={20} className="mr-2" />
                  Ver Demo
                </Button>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-violet-50 group-hover:bg-violet-600 transition-colors flex items-center justify-center mb-6">
                  <MessageSquare className="text-violet-600 group-hover:text-white transition-colors" size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Contexto Inteligente</h3>
                <p className="text-slate-500 leading-relaxed">
                  Entende perfeitamente o conteúdo da sua página para fornecer respostas relevantes e precisas instantaneamente.
                </p>
              </div>
              
              <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-fuchsia-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-fuchsia-50 group-hover:bg-fuchsia-600 transition-colors flex items-center justify-center mb-6">
                  <Sparkles className="text-fuchsia-600 group-hover:text-white transition-colors" size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Visual Marcante</h3>
                <p className="text-slate-500 leading-relaxed">
                  Projetado com gradientes vibrantes e contextos suaves e legíveis para combinar perfeitamente com a estética moderna.
                </p>
              </div>
              
              <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-pink-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-pink-50 group-hover:bg-pink-600 transition-colors flex items-center justify-center mb-6">
                  <Code2 className="text-pink-600 group-hover:text-white transition-colors" size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Fácil Integração</h3>
                <p className="text-slate-500 leading-relaxed">
                  Adicione o widget em qualquer projeto React, Vue ou HTML com apenas algumas linhas de código. Simples assim.
                </p>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 relative overflow-x-hidden selection:bg-fuchsia-200 selection:text-fuchsia-900">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-violet-50 via-fuchsia-50 to-transparent z-0 opacity-70"></div>
      
      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-900 cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white">
             <span className="font-bold">CD</span>
           </div>
           <div>
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">
               ChatDonno
             </span>
           </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button onClick={() => setCurrentPage('solutions')} className={`hover:text-fuchsia-600 transition-colors ${currentPage === 'solutions' ? 'text-fuchsia-600 font-bold' : ''}`}>Soluções</button>
          <button onClick={() => setCurrentPage('developers')} className={`hover:text-fuchsia-600 transition-colors ${currentPage === 'developers' ? 'text-fuchsia-600 font-bold' : ''}`}>Desenvolvedores</button>
          <button onClick={() => setCurrentPage('pricing')} className={`hover:text-fuchsia-600 transition-colors ${currentPage === 'pricing' ? 'text-fuchsia-600 font-bold' : ''}`}>Preços</button>
          <button onClick={() => setCurrentPage('docs')} className={`hover:text-fuchsia-600 transition-colors ${currentPage === 'docs' ? 'text-fuchsia-600 font-bold' : ''}`}>Docs</button>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/edirgimenes-hub/chatdonno" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium hover:border-fuchsia-200 hover:text-fuchsia-600"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <Button variant="primary" size="sm" className="rounded-full shadow-lg shadow-fuchsia-500/20" onClick={() => setCurrentPage('pricing')}>
            Começar
          </Button>
        </div>
      </nav>

      {/* Main Content Render */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-32">
        {renderContent()}
      </main>

      {/* The Actual Widget Integration */}
      <ChatWidget />
      
    </div>
  );
}