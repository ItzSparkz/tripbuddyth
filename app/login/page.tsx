"use client"
import { useState } from "react"

export default function Login(){

const [role,setRole]=useState("user")
const [logged,setLogged]=useState(false)

if(logged){
return(
<main className="p-10 text-center">

<h1 className="text-4xl font-bold mb-6">
Dashboard ({role})
</h1>

{role==="guide" &&(
<p>สร้างแพ็คเกจทริป + จัดการลูกค้า</p>
)}

{role==="admin" &&(
<p>อนุมัติแพ็คเกจ / จัดการระบบ</p>
)}

{role==="user" &&(
<p>ดูและจองแพ็คเกจท่องเที่ยว</p>
)}

<button
onClick={()=>setLogged(false)}
className="mt-6 bg-red-600 text-white px-6 py-3 rounded"
>
Logout
</button>

</main>
)
}

return(
<main className="flex items-center justify-center h-[80vh]">

<div className="bg-white/70 backdrop-blur-md p-10 rounded-xl shadow-xl text-center">

<h1 className="text-3xl font-bold mb-6">
Login Demo
</h1>

<select
onChange={e=>setRole(e.target.value)}
className="border p-2 mb-4 w-full"
>
<option value="user">User</option>
<option value="guide">Guide</option>
<option value="admin">Admin</option>
</select>

<button
onClick={()=>setLogged(true)}
className="bg-blue-600 text-white px-6 py-3 rounded w-full"
>
Login
</button>

</div>
</main>
)
}
