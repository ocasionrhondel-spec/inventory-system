'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  // State to hold the user's email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    // Prevents the default browser behavior of refreshing the page on form submission
    e.preventDefault();
    
    // --- Authentication Logic (Future) ---
    // Here is where you will eventually send the credentials to your C++ backend.
    // For now, we'll just log them to the console.
    
    console.log("--- Login Attempt ---");
    console.log("Email:", email);
    console.log("Password:", password); // In a real app, never log the password!
    
    // You would then handle the response from your backend, for example:
    // const response = await fetch('/api/auth/login', { ... });
    // if (response.ok) { window.location.href = '/'; } 
    
    alert("Login attempt captured in the console. Redirecting to dashboard...");
    window.location.href = '/'; // Simulate a successful login by redirecting
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-8 pb-8 space-y-8 bg-white rounded-lg shadow-lg border">
        
        {/* Header */}
        <div className="text-center">
          <Image src="/logo.png" alt="IIHC Logo" width={150} height={150} className="mx-auto mb-4" />
          <p className="mt-2 text-gray-600 text-lg">
            Welcome to the Payroll Portal of IIHC
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {/* Options (Forgot Password) */}
          <div className="flex items-center justify-end text-sm">
            <Link href="forgot-password" className="font-medium text-red-600 hover:text-red-500">
              Contact Administrator?
            </Link>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 font-semibold text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
