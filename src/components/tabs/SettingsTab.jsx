import React, { useState } from 'react';
import { Settings, Import, FileText, Upload, Bell, Moon, Sun, Palette, Globe, Shield } from 'lucide-react';

const SettingsTab = ({ setViagensDataState, setFinances, onBack }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [importType, setImportType] = useState('travels');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleImport = () => {
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const csvData = e.target.result;
        const lines = csvData.split('\n');
        const headers = lines[0].split(',');
        const data = lines.slice(1).map(line => {
          const values = line.split(',');
          const obj = {};
          headers.forEach((header, index) => {
            obj[header.trim()] = values[index]?.trim() || '';
          });
          return obj;
        });

        if (importType === 'travels') {
          // Processar dados de viagens
          const travelData = data.map((row, index) => ({
            id: index + 1,
            destino: row.destino || row.Destino || '',
            pais: row.pais || row.País || '',
            data_inicio: row.data_inicio || row['Data Início'] || '',
            data_fim: row.data_fim || row['Data Fim'] || '',
            duracao: row.duracao || row.Duração || '',
            orcamento: parseFloat(row.orcamento || row.Orçamento || 0),
            status: row.status || row.Status || 'Planejada',
            bloco: row.bloco || row.Bloco || '',
            dias_schengen: row.dias_schengen || row['Dias Schengen'] || '',
            notas: row.notas || row.Notas || '',
            subtotal_base: parseFloat(row.subtotal_base || row['Subtotal Base'] || 0),
            subtotal_alto: parseFloat(row.subtotal_alto || row['Subtotal Alto'] || 0),
            total_base: parseFloat(row.total_base || row['Total Base'] || 0),
            total_alto: parseFloat(row.total_alto || row['Total Alto'] || 0),
            buffer_base: parseFloat(row.buffer_base || row['Buffer Base'] || 0),
            buffer_alto: parseFloat(row.buffer_alto || row['Buffer Alto'] || 0),
            fator_extrapolado: parseFloat(row.fator_extrapolado || row['Fator Extrapolado'] || 0)
          }));
          setViagensDataState(travelData);
        } else {
          // Processar dados financeiros
          const financeData = data.map((row, index) => ({
            id: index + 1,
            date: row.date || row.data || row.Data || new Date().toISOString().split('T')[0],
            description: row.description || row.descricao || row.Descrição || '',
            amount: parseFloat(row.amount || row.valor || row.Valor || 0),
            type: row.type || row.tipo || row.Tipo || 'expense',
            category: row.category || row.categoria || row.Categoria || 'Outros',
            notes: row.notes || row.notas || row.Notas || ''
          }));
          setFinances(financeData);
        }

        alert(`${importType === 'travels' ? 'Viagens' : 'Transações financeiras'} importadas com sucesso!`);
        setSelectedFile(null);
      } catch (error) {
        alert('Erro ao processar arquivo CSV. Verifique o formato.');
      }
    };
    reader.readAsText(selectedFile);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-xl">
            <Settings className="text-white" size={32} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Configurações</h2>
            <p className="text-gray-400">Personalize sua experiência</p>
          </div>
        </div>
        {onBack && (
          <button
            onClick={onBack}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Voltar
          </button>
        )}
      </div>

      {/* Importação de Dados */}
      <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
        <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-3">
          <Import className="text-blue-400" size={24} />
          Importação de Dados
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-400 text-sm mb-2">Tipo de Importação</label>
            <select 
              value={importType}
              onChange={(e) => setImportType(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              <option value="travels">Planilha de Viagens</option>
              <option value="finances">Planilha Financeira</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-400 text-sm mb-2">Selecionar Arquivo CSV</label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
              />
              <button
                onClick={handleImport}
                disabled={!selectedFile}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Upload size={20} />
                Importar
              </button>
            </div>
            {selectedFile && (
              <p className="text-green-400 text-sm mt-2">
                Arquivo selecionado: {selectedFile.name}
              </p>
            )}
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Formato esperado para CSV:</h4>
            <div className="text-gray-400 text-sm space-y-1">
              {importType === 'travels' ? (
                <>
                  <p>• Colunas: destino, país, data_início, data_fim, duração, orçamento, status</p>
                  <p>• Exemplo: "Berlim, Alemanha, 2024-06-01, 2024-06-07, 7 dias, 5000, Planejada"</p>
                </>
              ) : (
                <>
                  <p>• Colunas: data, descrição, valor, tipo, categoria</p>
                  <p>• Exemplo: "2024-01-15, Almoço, 25.50, expense, Alimentação"</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Preferências do Usuário */}
      <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
        <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-3">
          <Settings className="text-purple-400" size={24} />
          Preferências do Usuário
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Notificações */}
          <div className="space-y-4">
            <h4 className="text-white font-medium flex items-center gap-2">
              <Bell className="text-blue-400" size={20} />
              Notificações
            </h4>
            <div className="space-y-3">
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Notificações de metas</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" defaultChecked />
              </label>
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Lembretes de viagens</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" defaultChecked />
              </label>
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Alertas financeiros</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              </label>
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Resumo semanal</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              </label>
            </div>
          </div>

          {/* Aparência */}
          <div className="space-y-4">
            <h4 className="text-white font-medium flex items-center gap-2">
              <Palette className="text-purple-400" size={20} />
              Aparência
            </h4>
            <div className="space-y-3">
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Modo escuro</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" defaultChecked />
              </label>
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Animações</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" defaultChecked />
              </label>
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Compacto</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              </label>
            </div>
          </div>
        </div>

        {/* Configurações Avançadas */}
        <div className="mt-8 space-y-4">
          <h4 className="text-white font-medium flex items-center gap-2">
            <Shield className="text-green-400" size={20} />
            Configurações Avançadas
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Sincronização automática</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" defaultChecked />
              </label>
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Modo offline</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              </label>
            </div>
            <div className="space-y-3">
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Backup automático</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              </label>
              <label className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span className="text-white">Analytics</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" defaultChecked />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Integrações */}
      <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
        <h3 className="text-white font-semibold mb-6 text-xl flex items-center gap-3">
          <Globe className="text-blue-400" size={24} />
          Integrações
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">G</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Google Calendar</h4>
                  <p className="text-gray-400 text-sm">Sincronize eventos com seu calendário</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-gray-400 text-sm font-medium">Disponível</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">T</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Trello</h4>
                  <p className="text-gray-400 text-sm">Importe projetos do Trello</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-gray-400 text-sm font-medium">Disponível</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg">N</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Notion</h4>
                  <p className="text-gray-400 text-sm">Sincronize dados com Notion</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-gray-400 text-sm font-medium">Em breve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;


