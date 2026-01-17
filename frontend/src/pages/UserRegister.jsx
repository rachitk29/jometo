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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Handle registration (e.g., API call)
    console.log('Register:', formData);
  };

  const getInputClass = (name) => {
    const base = "w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition";
    const errorBorder = errors[name] ? "border-red-500" : "border-gray-300 dark:border-slate-600";
    return `${base} ${errorBorder}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 py-6 sm:py-12">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-xl p-6 sm:p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Sign up to start ordering your favorite food
            </p>
            <span className="inline-flex items-center mt-4 text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20 px-3 py-1 rounded-full">
              User
            </span>
          </div>

          {/* Form */}
          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="block text-xs font-medium text-gray-800 dark:text-gray-200 mb-1">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className={getInputClass('firstName')}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className={getInputClass('lastName')}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className={getInputClass('email')}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className={getInputClass('password')}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className={getInputClass('confirmPassword')}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-center gap-3">
              <input
                id="agreeTerms"
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="h-4 w-4 rounded accent-red-500 focus:ring-red-500"
              />
              <label htmlFor="agreeTerms" className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!formData.agreeTerms || formData.password !== formData.confirmPassword}
              className="w-full py-3 rounded-lg text-white font-medium bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8 gap-4">
            <div className="flex-1 h-px bg-gray-200 dark:bg-slate-600"></div>
            <span className="text-xs text-gray-400 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-slate-600"></div>
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="py-2 rounded-lg border border-gray-300 dark:border-slate-600 text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-all duration-200">
              Google
            </button>
            <button className="py-2 rounded-lg border border-gray-300 dark:border-slate-600 text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-all duration-200">
              GitHub
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <a href="/user/login" className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-colors duration-150">
                Sign in
              </a>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Want to register as a restaurant partner?{' '}
              <a href="/food-partner/register" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors duration-150">
                Register as partner
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;