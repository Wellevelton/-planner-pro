import React from 'react';
import { User, Settings, Save, Import, Users, Building } from 'lucide-react';

const SettingsTab = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-xl">
          <User className="text-white" size={32} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Perfil do Usuário</h2>
          <p className="text-gray-400">Configure seu perfil e preferências</p>
        </div>
      </div>

      {/* Seção de Perfil */}
      <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
        <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-3">
          <User className="text-purple-400" size={24} />
          Informações do Perfil
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Nome</label>
              <input 
                type="text" 
                defaultValue="wellevelton silva"
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Email</label>
              <input 
                type="email" 
                defaultValue="wellevelton@email.com"
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Cargo Atual</label>
              <input 
                type="text" 
                defaultValue="Desenvolvedor Frontend Jr"
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Localização</label>
              <input 
                type="text" 
                defaultValue="São Paulo, Brasil"
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
            Salvar Alterações
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors">
            Cancelar
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Integrações */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-3">
            <Building className="text-blue-400" size={24} />
            Integrações
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">N</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Neon Database</h4>
                    <p className="text-gray-400 text-sm">Banco de dados PostgreSQL na nuvem</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm font-medium">Conectado</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">G</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Google Sheets</h4>
                    <p className="text-gray-400 text-sm">Sincronização com planilhas Google</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-yellow-400 text-sm font-medium">Configurando</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">T</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Trello Integration</h4>
                    <p className="text-gray-400 text-sm">Sincronização de projetos</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm font-medium">Disponível</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Backup & Exportação */}
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-3">
            <Save className="text-green-400" size={24} />
            Backup & Exportação
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">Último backup</span>
                <span className="text-green-400 text-sm">Há 2 horas</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Import size={20} />
                Exportar Todos os Dados
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Save size={20} />
                Backup Manual
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Users size={20} />
                Importar do Trello
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Preferências */}
      <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
        <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-3">
          <User className="text-purple-400" size={24} />
          Preferências do Usuário
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-white font-medium">Notificações</h4>
            <div className="space-y-3">
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Notificações de metas</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" defaultChecked />
              </label>
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Lembrete de backup</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" defaultChecked />
              </label>
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Resumo semanal</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              </label>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-medium">Sincronização</h4>
            <div className="space-y-3">
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Sincronização automática</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" defaultChecked />
              </label>
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Backup diário automático</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              </label>
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Modo offline</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;


