"use client"

import { useEffect,useState } from "react"

export default function Fav(){

  const [fav,setFav]=useState<any>(null)

  useEffect(()=>{
    const data=localStorage.getItem("fav")
    if(data) setFav(JSON.parse(data))
  },[])

  return(
    <main className="p-10">

      <h1 className="text-3xl font-bold">
        สถานที่โปรด
      </h1>

      {fav ? (
        <div className="mt-6 border p-4 rounded">
          <h2 className="text-xl font-bold">{fav.name}</h2>
          <p>{fav.detail}</p>
        </div>
      ):(
        <p className="mt-4">ยังไม่มี</p>
      )}

    </main>
  )
}
