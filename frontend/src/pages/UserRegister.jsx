import React, { useState } from 'react';

function UserRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-4 transition-colors">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Sign up to start ordering your favorite food
            </p>
            <span className="inline-flex items-center mt-4 text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20 px-3 py-1 rounded-full">
              👤 User
            </span>
          </div>

          {/* Form */}
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition"
              />
            </div>

            {/* Confirm */}
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 accent-red-500"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I agree to the Terms of Service and Privacy Policy
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={!formData.agreeTerms}
              className="w-full mt-2 py-3 rounded-lg text-white font-medium bg-red-500 hover:bg-red-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8 gap-4">
            <div className="flex-1 h-px bg-gray-200 dark:bg-slate-600"></div>
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              or
            </span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-slate-600"></div>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-4">
            <button className="py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition">
              Google
            </button>
            <button className="py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition">
              GitHub
            </button>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <a
              href="/user/login"
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
