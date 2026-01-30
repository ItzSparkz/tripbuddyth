"use client"
import {useEffect,useState} from "react"

export default function Fav(){
const [f,setF]=useState<any>(null)

useEffect(()=>{
const d=localStorage.getItem("fav")
if(d) setF(JSON.parse(d))
},[])

return(
<main className="p-10">
<h1 className="text-3xl font-bold">Favorite</h1>

{f?(
<div className="border p-4 mt-4">
<h2 className="font-bold">{f.name}</h2>
<p>{f.detail}</p>
</div>
):<p className="mt-4">ยังไม่มี</p>}
</main>
)
}
