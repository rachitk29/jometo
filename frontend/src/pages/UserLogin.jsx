import React, { useState } from 'react';

function UserLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4 transition-colors duration-300">
      <div className="w-full max-w-sm">
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b border-gray-200 dark:border-slate-700">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Welcome Back</h1>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">Sign in to your account to continue</p>
            <span className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border border-red-200 dark:border-red-900/30">
              👤 User
            </span>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 text-base font-medium border-2 border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-all duration-150 placeholder-gray-500 dark:placeholder-gray-400 hover:border-gray-400 dark:hover:border-slate-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/30"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 text-base font-medium border-2 border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-all duration-150 placeholder-gray-500 dark:placeholder-gray-400 hover:border-gray-400 dark:hover:border-slate-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/30"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3 py-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-5 h-5 cursor-pointer accent-red-500 rounded border-2 border-gray-300 dark:border-slate-600 transition-all duration-150 hover:border-red-500 checked:bg-red-500 checked:border-red-500"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 text-base font-bold text-white bg-gradient-to-r from-red-500 to-red-600 border-0 rounded-lg cursor-pointer transition-all duration-150 uppercase tracking-wider shadow-md hover:shadow-lg hover:from-red-600 hover:to-red-700 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:transform-none"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8 gap-4">
            <div className="flex-1 h-px bg-gray-300 dark:bg-slate-600"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-slate-600"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              className="py-3 px-4 text-sm font-semibold border-2 border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white cursor-pointer transition-all duration-150 flex items-center justify-center gap-2 uppercase tracking-wider hover:border-red-500 hover:bg-gray-100 dark:hover:bg-slate-600 hover:-translate-y-0.5 active:translate-y-0"
            >
              Google
            </button>
            <button
              type="button"
              className="py-3 px-4 text-sm font-semibold border-2 border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white cursor-pointer transition-all duration-150 flex items-center justify-center gap-2 uppercase tracking-wider hover:border-red-500 hover:bg-gray-100 dark:hover:bg-slate-600 hover:-translate-y-0.5 active:translate-y-0"
            >
              GitHub
            </button>
          </div>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-gray-200 dark:border-slate-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Don't have an account?{' '}
              <a href="/user/register" className="text-red-500 dark:text-red-400 no-underline font-bold transition-all duration-150 cursor-pointer hover:text-red-600 dark:hover:text-red-300">
                Sign up
              </a>
            </p>
            <p>
              <a href="#" className="text-sm text-red-500 dark:text-red-400 no-underline font-bold transition-all duration-150 cursor-pointer hover:text-red-600 dark:hover:text-red-300">
                Forgot password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
