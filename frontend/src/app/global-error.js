"use client";

import { OctagonAlert } from "lucide-react";

export default function ErrorDisplay({ title, message }) {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg border border- max-w-lg w-full">
        <div className="flex justify-center mb-6">
            <OctagonAlert size={100} color="red"/>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {title || "Oops! Something went wrong."}
        </h2>
        <p className="text-gray-600 text-md">
          {message || "We're having a little trouble loading this page. Please try again."}
        </p>
        <div className="mt-8">
          <button
            onClick={handleReload}
            className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-sm hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Reload Page
          </button>
        </div>
        <p className="text-gray-500 mt-8 text-xs">
          If the problem continues, please contact support.
        </p>
      </div>
    </div>
  );
}

