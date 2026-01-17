import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UserRegister() {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/register", {
      fullName: firstName + ' ' + lastName,
      email,
      password,
    }, {
      withCredentials: true,
    })

    console.log(response.data);

    navigate("/")

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 py-6 sm:py-12">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-xl p-6 sm:p-6">

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

          <form className="space-y-3" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-800 dark:text-gray-200 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  required
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  required
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-medium bg-red-500 hover:bg-red-600 transition-all"
            >
              Create account
            </button>
          </form>

          <div className="mt-8 text-center space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <a href="/user/login" className="text-red-500 font-medium">
                Sign in
              </a>
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-500">
              Want to register as a restaurant partner?{' '}
              <a href="/food-partner/register" className="text-blue-500 font-bold">
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