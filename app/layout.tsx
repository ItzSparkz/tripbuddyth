import "./globals.css"
import Link from "next/link"

export default function RootLayout({children}:{children:React.ReactNode}){
return(
<html lang="th">
<body className="bg-gradient-to-br from-blue-50 via-white to-purple-100">

<nav className="fixed w-full backdrop-blur-lg bg-white/60 shadow-md z-50">
<div className="max-w-6xl mx-auto flex justify-between p-4">

<h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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

<div className="pt-20">
{children}
</div>

</body>
</html>
)}
