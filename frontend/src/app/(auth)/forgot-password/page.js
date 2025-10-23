import { Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg border max-w-lg w-full">
        
        {/* Support/Admin Icon SVG */}
        <div className="flex justify-center mb-6">
            <Star size={68} className="text-yellow-500" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Password Reset
        </h1>
        <p className="text-gray-600 text-md">
          For security reasons, this system requires you to contact your administrator directly to reset your password.
        </p>
        <p className="text-gray-600 text-md mt-2">
          Please reach out to your manager or the IT department.
        </p>
        
        <div className="mt-8">
          <Link
            href="/login"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-sm hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
