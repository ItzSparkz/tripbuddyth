import "./globals.css"
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className="bg-gradient-to-br from-blue-50 to-purple-100">

        {/* NAVBAR */}
        <nav className="backdrop-blur-md bg-white/70 shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between p-4">

            <h1 className="font-bold text-xl text-blue-600">
              TripbuddyTH
            </h1>

            <div className="space-x-6 font-medium">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <Link href="/places" className="hover:text-blue-600">Places</Link>
              <Link href="/marketplace" className="hover:text-blue-600">Marketplace</Link>
              <Link href="/favorites" className="hover:text-blue-600">Favorites</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
            </div>

          </div>
        </nav>

        {children}

      </body>
    </html>
  )
}
