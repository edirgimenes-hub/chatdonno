import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

export const PricingPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in-up">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Planos Flexíveis</h2>
        <p className="text-xl text-slate-500">
          Comece grátis, cresça conforme sua necessidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Tier */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col">
          <h3 className="text-xl font-bold text-slate-900">Iniciante</h3>
          <div className="mt-4 mb-8">
            <span className="text-4xl font-bold text-slate-900">R$0</span>
            <span className="text-slate-500">/mês</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-slate-600">
              <Check size={18} className="text-green-500" />
              100 conversas/mês
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <Check size={18} className="text-green-500" />
              1 Bot Ativo
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <Check size={18} className="text-green-500" />
              Histórico de 7 dias
            </li>
          </ul>
          <Button variant="secondary" className="w-full">Começar Grátis</Button>
        </div>

        {/* Pro Tier */}
        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col relative transform scale-105 shadow-xl">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
            MAIS POPULAR
          </div>
          <h3 className="text-xl font-bold text-white">Profissional</h3>
          <div className="mt-4 mb-8">
            <span className="text-4xl font-bold text-white">R$99</span>
            <span className="text-slate-400">/mês</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-slate-300">
              <Check size={18} className="text-fuchsia-400" />
              Conversas Ilimitadas
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Check size={18} className="text-fuchsia-400" />
              5 Bots Ativos
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Check size={18} className="text-fuchsia-400" />
              Histórico Ilimitado
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Check size={18} className="text-fuchsia-400" />
              Remoção da marca ChatDonno
            </li>
          </ul>
          <Button variant="primary" className="w-full">Assinar Agora</Button>
        </div>

        {/* Enterprise Tier */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col">
          <h3 className="text-xl font-bold text-slate-900">Empresarial</h3>
          <div className="mt-4 mb-8">
            <span className="text-4xl font-bold text-slate-900">Sob Consulta</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-slate-600">
              <Check size={18} className="text-green-500" />
              Bots Ilimitados
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <Check size={18} className="text-green-500" />
              SLA de 99.9%
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <Check size={18} className="text-green-500" />
              Gerente de Conta Dedicado
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <Check size={18} className="text-green-500" />
              Treinamento de IA Personalizado
            </li>
          </ul>
          <Button variant="secondary" className="w-full">Falar com Vendas</Button>
        </div>
      </div>
    </div>
  );
};