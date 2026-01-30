"use client"

import Link from "next/link"
import { useState } from "react"

const places = [
  { id:1, name:"เชียงใหม่", detail:"ดอยอินทนนท์" },
  { id:2, name:"กระบี่", detail:"ทะเลอ่าวนาง" },
  { id:3, name:"ภูเก็ต", detail:"หาดป่าตอง" },
  { id:4, name:"กรุงเทพ", detail:"วัดพระแก้ว" },
]

export default function Places() {
  const [search,setSearch]=useState("")

  const filtered = places.filter(p =>
    p.name.includes(search)
  )

  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-4">
        ค้นหาสถานที่
      </h1>

      <input
        placeholder="พิมพ์จังหวัด..."
        className="border p-2 w-full mb-6"
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="grid gap-4">
        {filtered.map(p=>(
          <Link key={p.id} href={`/places/${p.id}`}>
            <div className="border p-4 rounded hover:bg-gray-100 cursor-pointer">
              <h2 className="text-xl font-bold">{p.name}</h2>
              <p>{p.detail}</p>
            </div>
          </Link>
        ))}
      </div>

    </main>
  )
}
