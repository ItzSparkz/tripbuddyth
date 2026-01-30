"use client"

import { useParams } from "next/navigation"

const data:any = {
  1:{name:"เชียงใหม่",detail:"ดอยอินทนนท์ จุดสูงสุดของไทย"},
  2:{name:"กระบี่",detail:"ทะเลสวย น้ำใส"},
  3:{name:"ภูเก็ต",detail:"เมืองท่องเที่ยวยอดนิยม"},
  4:{name:"กรุงเทพ",detail:"วัดพระแก้ว ศิลปะงดงาม"},
}

export default function Detail(){

  const params = useParams()
  const place = data[params.id as string]

  const saveFavorite=()=>{
    localStorage.setItem(
      "fav",
      JSON.stringify(place)
    )
    alert("บันทึกแล้ว")
  }

  return(
    <main className="p-10">

      <h1 className="text-3xl font-bold">
        {place.name}
      </h1>

      <p className="mt-4">
        {place.detail}
      </p>

      <button
        onClick={saveFavorite}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
      >
        บันทึก Favorite
      </button>

    </main>
  )
}
