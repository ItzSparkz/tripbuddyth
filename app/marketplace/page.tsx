"use client"
import { useState, useEffect } from "react"

export default function Marketplace(){

const [role,setRole]=useState("user")
const [packages,setPackages]=useState<any[]>([])
const [title,setTitle]=useState("")
const [price,setPrice]=useState("")

useEffect(()=>{
const saved=localStorage.getItem("packages")
if(saved) setPackages(JSON.parse(saved))
},[])

const saveData=(data:any)=>{
localStorage.setItem("packages",JSON.stringify(data))
setPackages(data)
}

const createPackage=()=>{
if(!title || !price) return alert("กรอกข้อมูล")

const newPkg={id:Date.now(),title,price,approved:false}
const updated=[...packages,newPkg]
saveData(updated)
alert("ส่งให้ Admin ตรวจแล้ว")
}

const approve=(id:number)=>{
const updated=packages.map(p=>
p.id===id ? {...p,approved:true} : p
)
saveData(updated)
}

const approvedPkgs=packages.filter(p=>p.approved)

return(
<main className="p-10">

<h1 className="text-3xl font-bold mb-6">Marketplace Demo</h1>

<select
className="border p-2 mb-6"
onChange={e=>setRole(e.target.value)}
>
<option value="user">User</option>
<option value="guide">Guide</option>
<option value="admin">Admin</option>
</select>

{role==="guide" &&(
<div className="border p-4 mb-6">
<h2 className="font-bold mb-2">สร้างแพ็คเกจ</h2>

<input
placeholder="ชื่อทริป"
className="border p-2 mb-2 w-full"
onChange={e=>setTitle(e.target.value)}
/>

<input
placeholder="ราคา"
className="border p-2 mb-2 w-full"
onChange={e=>setPrice(e.target.value)}
/>

<button
onClick={createPackage}
className="bg-blue-600 text-white px-4 py-2 rounded"
>
ส่งให้ Admin
</button>
</div>
)}

{role==="admin" && packages.map(p=>(
<div key={p.id} className="border p-3 mb-3">
<p>{p.title} - {p.price} บาท</p>

{!p.approved &&(
<button
onClick={()=>approve(p.id)}
className="bg-green-600 text-white px-3 py-1 rounded"
>
อนุมัติ
</button>
)}

{p.approved && <span>✔ อนุมัติแล้ว</span>}
</div>
))}

{role==="user" && approvedPkgs.map(p=>(
<div key={p.id} className="border p-3 mb-3">
<p className="font-bold">{p.title}</p>
<p>{p.price} บาท</p>

<button
className="bg-purple-600 text-white px-3 py-1 rounded mt-2"
onClick={()=>alert("จองสำเร็จ (Demo)")}
>
จองแพ็คเกจ
</button>
</div>
))}

</main>
)
}
