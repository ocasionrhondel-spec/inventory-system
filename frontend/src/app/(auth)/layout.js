import "@/app/globals.css";

export const metadata = {
  title: "Login - Payroll System",
  description: "Login to access the Payroll System",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50 text-gray-900">
        <main className="flex-1 flex flex-col">
          <div className="">{children}</div>
        </main>
      </body>
    </html>
  )
}
