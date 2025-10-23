import { MessageCircleQuestionMark } from "lucide-react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg border max-w-lg w-full">
        <div className="flex justify-center mb-6">
            <MessageCircleQuestionMark size={100} color="orange"/>
        </div>
        <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-md">
          Sorry, we couldn't find the page you were looking for. It might have been moved, deleted, or you may have typed the address incorrectly.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-sm hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Go back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

