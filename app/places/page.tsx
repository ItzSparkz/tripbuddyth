"use client"

import { useState } from "react"

const places = [
  { name: "เชียงใหม่", detail: "ดอยอินทนนท์" },
  { name: "กระบี่", detail: "ทะเลอ่าวนาง" },
  { name: "ภูเก็ต", detail: "หาดป่าตอง" },
  { name: "กรุงเทพ", detail: "วัดพระแก้ว" },
]

export default function Places() {
  const [search, setSearch] = useState("")

  const filtered = places.filter(p =>
    p.name.includes(search)
  )

  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        ค้นหาสถานที่ท่องเที่ยว
      </h1>

      <input
        placeholder="พิมพ์ชื่อจังหวัด..."
        className="border p-2 mb-6 w-full"
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="grid gap-4">
        {filtered.map((p,i)=>(
          <div key={i} className="p-4 border rounded">
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p>{p.detail}</p>
          </div>
        ))}
      </div>

    </main>
  )
}
