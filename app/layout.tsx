"use client"
import "./globals.css"
import Link from "next/link"
import { useState } from "react"

export default function RootLayout({children}:{children:React.ReactNode}){

const [dark,setDark]=useState(false)

return(
<html lang="th">
<body className={dark?"bg-black text-white":"bg-gradient-to-br from-blue-50 via-white to-purple-100"}>

<nav className="fixed w-full backdrop-blur-lg bg-white/60 shadow-md z-50">
<div className="max-w-6xl mx-auto flex justify-between p-4">

<h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
TripbuddyTH
</h1>

<div className="space-x-6 font-medium">
<Link href="/">Home</Link>
<Link href="/places">Places</Link>
<Link href="/marketplace">Marketplace</Link>
<Link href="/login">Login</Link>

<button
onClick={()=>setDark(!dark)}
className="ml-4 bg-black text-white px-3 py-1 rounded"
>
{dark?"☀️":"🌙"}
</button>
</div>

</div>
</nav>

<div className="pt-20">
{children}
</div>

</body>
</html>
)}
