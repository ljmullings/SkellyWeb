"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-gray-900">
      <div className="container max-w-md shadow-lg rounded-lg p-8 bg-white">
        <h1 className="text-3xl text-highlight font-bold text-center mb-6">Welcome to SkellyWeb</h1>
        {isLogin ? (
          <div>
            <h2 className="text-xl font-bold text-center mb-4">Login to your account</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-secondary p-2 rounded-lg shadow-inner focus:ring-2 focus:ring-accent"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border-secondary p-2 rounded-lg shadow-inner focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="w-full bg-highlight text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
                Log In
              </button>
            </form>
            <p className="text-center mt-4">
              <button onClick={() => setIsLogin(false)} className="text-accent hover:underline">
                Create an account
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-center mb-4">Create a new account</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full border-secondary p-2 rounded-lg shadow-inner focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border-secondary p-2 rounded-lg shadow-inner focus:ring-2 focus:ring-accent"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border-secondary p-2 rounded-lg shadow-inner focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="w-full bg-highlight text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300">
                Sign Up
              </button>
            </form>
            <p className="text-center mt-4">
              <button onClick={() => setIsLogin(true)} className="text-accent hover:underline">
                Already have an account? Log in here
              </button>
            </p>
          </div>
        )}
        <footer className="text-center mt-6 text-gray-600">
          <p> Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-accent hover:underline">
              Sign up here
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
