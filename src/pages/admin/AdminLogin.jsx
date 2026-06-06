import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

const AdminLogin = () => {
  const { login } = useAdmin();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Small delay for visual feedback
    await new Promise(resolve => setTimeout(resolve, 800));

    const success = login(password);
    if (!success) {
      setError('Invalid password. Access denied.');
      setPassword('');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#060A1F] flex items-center justify-center relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric/8 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px]"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        {/* Card */}
        <div className="bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/40">
          {/* Logo */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 bg-electric/10 border border-electric/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <ShieldCheck className="w-8 h-8 text-electric" />
            </motion.div>
            <h1 className="font-heading text-2xl font-bold text-white mb-2">
              Akad<span className="text-electric">mix</span> Admin
            </h1>
            <p className="text-gray-500 text-sm font-body">
              Enter your password to access the dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="Enter admin password"
                className="w-full bg-white/[0.05] border border-white/[0.08] text-white placeholder-gray-600 pl-11 pr-12 py-4 rounded-xl outline-none focus:border-electric/50 focus:bg-white/[0.07] transition-all duration-300 font-body text-sm"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm font-body bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-lg"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full bg-electric hover:bg-blue-600 disabled:bg-electric/30 disabled:cursor-not-allowed text-white py-4 rounded-xl font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                <>
                  <span className="relative z-10">Access Dashboard</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
            <p className="text-gray-600 text-xs font-body">
              Protected area · Authorized personnel only
            </p>
          </div>
        </div>

        {/* Bottom branding */}
        <div className="text-center mt-6">
          <p className="text-gray-700 text-xs font-body">
            © {new Date().getFullYear()} Akadmix Education
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
