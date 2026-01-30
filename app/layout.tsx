import "./globals.css"
import Link from "next/link"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>

        <nav className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="font-bold">TripbuddyTH</h1>

          <div className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/places">Places</Link>
            <Link href="/favorites">Favorites</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>

        {children}

      </body>
    </html>
  )
}
