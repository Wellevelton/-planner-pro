import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, LogIn, Sparkles } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular processo de login
    setTimeout(() => {
      setIsLoading(false);
      onLogin(formData);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center relative overflow-hidden">
      {/* Background - Partículas CSS */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        {/* Partículas maiores para efeito mais dramático */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-700/50">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-2xl">
                <Sparkles className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Planner Pro</h1>
            <p className="text-gray-400">Faça login para continuar</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full bg-gray-700/50 border border-gray-600 text-white rounded-lg pl-10 pr-12 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 rounded bg-gray-700"
                />
                <span className="ml-2 text-sm text-gray-300">Lembrar de mim</span>
              </label>
              <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Entrando...
                </>
              ) : (
                <>
                  <LogIn className="h-5 w-5" />
                  Entrar
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-4 text-gray-400 text-sm">ou</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full bg-gray-700/50 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-700 font-bold text-xs">G</span>
              </div>
              Continuar com Google
            </button>
            
            <button className="w-full bg-gray-700/50 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">f</span>
              </div>
              Continuar com Facebook
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Não tem uma conta?{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
