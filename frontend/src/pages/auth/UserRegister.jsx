import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function UserRegister() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading) return

    const firstName = e.target.firstName.value.trim()
    const lastName = e.target.lastName.value.trim()
    const email = e.target.email.value.trim()
    const password = e.target.password.value

    try {
      setLoading(true)

      await axios.post(
        'http://localhost:3000/api/auth/user/register',
        {
          fullName: `${firstName} ${lastName}`,
          email,
          password,
        },
        { withCredentials: true }
      )

      navigate('/')
    } catch (err) {
      console.error(err)
      alert('Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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
                required
                className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-300 mb-1">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white"
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
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-2 rounded-lg bg-white text-black text-sm font-medium disabled:opacity-60"
          >
            {loading ? 'Creating account…' : 'Create account'}
          </button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <p className="text-sm text-zinc-400">
            Already have an account?{' '}
            <Link to="/user/login" className="text-white hover:underline">
              Sign in
            </Link>
          </p>

          <p className="text-xs text-zinc-500">
            Want to register as a restaurant partner?{' '}
            <Link to="/food-partner/register" className="text-zinc-300 hover:underline">
              Register as partner
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
