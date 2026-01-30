"use client"
import { useState, useEffect } from "react"

export default function Demo(){

const [mode,setMode]=useState("login")
const [users,setUsers]=useState<any[]>([])
const [current,setCurrent]=useState<any>(null)

const [form,setForm]=useState<any>({})

// โหลดข้อมูล
useEffect(()=>{
const u=localStorage.getItem("users")
if(u) setUsers(JSON.parse(u))

const c=localStorage.getItem("currentUser")
if(c) setCurrent(JSON.parse(c))
},[])

const saveUsers=(u:any)=>{
localStorage.setItem("users",JSON.stringify(u))
setUsers(u)
}

// สมัคร
const register=()=>{
if(!form.username||!form.role) return alert("กรอกให้ครบ")

const newUser={
...form,
posts:[],
packages:[],
approved:false
}

const updated=[...users,newUser]
saveUsers(updated)
alert("สมัครสำเร็จ")
setMode("login")
}

// login
const login=()=>{
const u=users.find(x=>x.username===form.username)
if(!u) return alert("ไม่พบผู้ใช้")

localStorage.setItem("currentUser",JSON.stringify(u))
setCurrent(u)
}

// logout
const logout=()=>{
localStorage.removeItem("currentUser")
setCurrent(null)
}

// -------- USER POST --------
const createPost=()=>{
current.posts.push(form)
updateCurrent()
alert("โพสต์แล้ว")
}

// -------- GUIDE PACKAGE --------
const createPackage=()=>{
current.packages.push({...form,approved:false})
updateCurrent()
alert("ส่งให้ Admin ตรวจ")
}

// update user
const updateCurrent=()=>{
const updated=users.map(u=>
u.username===current.username?current:u
)
saveUsers(updated)
localStorage.setItem("currentUser",JSON.stringify(current))
}

// -------- ADMIN APPROVE --------
const approve=(guide:any,i:number)=>{
guide.packages[i].approved=true
updateCurrent()
saveUsers(users)
}

if(!current){
return(
<main className="p-10 max-w-md mx-auto">

<h1 className="text-3xl font-bold mb-6 text-center">
Demo Login
</h1>

<input placeholder="username"
className="border p-2 mb-3 w-full"
onChange={e=>setForm({...form,username:e.target.value})}/>

<select
className="border p-2 mb-3 w-full"
onChange={e=>setForm({...form,role:e.target.value})}>
<option value="">เลือก role</option>
<option value="user">User</option>
<option value="guide">Guide</option>
<option value="admin">Admin</option>
</select>

<button onClick={login}
className="bg-blue-600 text-white p-2 w-full mb-2">
Login
</button>

<button onClick={register}
className="bg-green-600 text-white p-2 w-full">
Register
</button>

</main>
)}

return(
<main className="p-10 max-w-xl mx-auto">

<h1 className="text-3xl font-bold mb-4">
Dashboard ({current.role})
</h1>

<button onClick={logout}
className="bg-red-600 text-white px-3 py-1 mb-4">
Logout
</button>

{/* USER */}
{current.role==="user"&&(
<div>
<h2 className="font-bold">หาเพื่อนเที่ยว</h2>

<input placeholder="สถานที่"
className="border p-2 w-full mb-2"
onChange={e=>setForm({...form,place:e.target.value})}/>

<input placeholder="วันเดินทาง"
className="border p-2 w-full mb-2"
onChange={e=>setForm({...form,date:e.target.value})}/>

<input placeholder="งบ"
className="border p-2 w-full mb-2"
onChange={e=>setForm({...form,budget:e.target.value})}/>

<input placeholder="รูป (URL)"
className="border p-2 w-full mb-2"
onChange={e=>setForm({...form,img:e.target.value})}/>

<button onClick={createPost}
className="bg-blue-600 text-white p-2 w-full">
โพสต์
</button>

{current.posts.map((p:any,i:number)=>(
<div key={i} className="border p-3 mt-3">
<p>{p.place} | {p.date}</p>
<p>งบ {p.budget}</p>
<img src={p.img} className="h-32"/>
</div>
))}
</div>
)}

{/* GUIDE */}
{current.role==="guide"&&(
<div>
<h2>สร้างแพ็คเกจ</h2>

<input placeholder="ชื่อทริป"
className="border p-2 w-full mb-2"
onChange={e=>setForm({...form,title:e.target.value})}/>

<input placeholder="รายละเอียด"
className="border p-2 w-full mb-2"
onChange={e=>setForm({...form,detail:e.target.value})}/>

<input placeholder="ราคา"
className="border p-2 w-full mb-2"
onChange={e=>setForm({...form,price:e.target.value})}/>

<button onClick={createPackage}
className="bg-purple-600 text-white p-2 w-full">
ส่งอนุมัติ
</button>

{current.packages.map((p:any,i:number)=>(
<div key={i} className="border p-3 mt-3">
<p>{p.title}</p>
<p>{p.price}</p>
<p>{p.approved?"✔ อนุมัติแล้ว":"รออนุมัติ"}</p>
</div>
))}
</div>
)}

{/* ADMIN */}
{current.role==="admin"&&(
<div>
<h2>อนุมัติแพ็คเกจไกด์</h2>

{users.filter(u=>u.role==="guide").map(g=>(
g.packages.map((p:any,i:number)=>(
<div key={i} className="border p-3 mb-2">
<p>{p.title} - {p.price}</p>

{!p.approved&&(
<button onClick={()=>approve(g,i)}
className="bg-green-600 text-white px-2">
อนุมัติ
</button>
)}

</div>
))
))}
</div>
)}

</main>
)
}
