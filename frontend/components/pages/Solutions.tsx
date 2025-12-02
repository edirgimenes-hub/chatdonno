import React from 'react';
import { MessageSquare, Users, Zap, Shield } from 'lucide-react';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in-up">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Soluções para cada necessidade</h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          O ChatDonno se adapta ao seu negócio, seja para suporte, vendas ou engajamento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center flex-shrink-0">
            <MessageSquare size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Suporte ao Cliente 24/7</h3>
            <p className="text-slate-600 leading-relaxed">
              Responda dúvidas instantaneamente sem filas de espera. O ChatDonno aprende com sua base de conhecimento para fornecer respostas precisas a qualquer hora.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-xl bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center flex-shrink-0">
            <Users size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Engajamento de Leads</h3>
            <p className="text-slate-600 leading-relaxed">
              Capture visitantes no momento certo. Nossa IA identifica intenção de compra e guia o usuário suavemente para a conversão.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center flex-shrink-0">
            <Zap size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Onboarding Automatizado</h3>
            <p className="text-slate-600 leading-relaxed">
              Ajude novos usuários a entenderem seu produto. Crie fluxos explicativos que educam e retêm clientes desde o primeiro dia.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
            <Shield size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Segurança e Privacidade</h3>
            <p className="text-slate-600 leading-relaxed">
              Seus dados e os de seus clientes são protegidos com criptografia de ponta a ponta. Total conformidade com LGPD.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};