import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function UserRegister() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await axios.post(
      "http://localhost:3000/api/auth/user/register",
      {
        fullName: `${firstName} ${lastName}`,
        email,
        password,
      },
      { withCredentials: true }
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8">
        
        <h1 className="text-2xl font-semibold text-white mb-2">
          Create account
        </h1>
        <p className="text-sm text-zinc-400 mb-6">
          Sign up to get started
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                required
                className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                required
                className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition"
          >
            Create account
          </button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <p className="text-sm text-zinc-400">
            Already have an account?{" "}
            <Link to="/user/login" className="text-white hover:underline">
              Sign in
            </Link>
          </p>

          <p className="text-xs text-zinc-500">
            Want to register as a restaurant partner?{" "}
            <Link to="/food-partner/register" className="text-zinc-300 hover:underline">
              Register as partner
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default UserRegister;
