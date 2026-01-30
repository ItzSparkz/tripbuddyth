import Link from "next/link"

export default function Home() {
  return (
    <main className="text-center py-20">

      <h2 className="text-4xl font-bold">
        เที่ยวไทยง่าย ๆ กับ TripbuddyTH
      </h2>

      <p className="mt-4">
        เว็บแนะนำสถานที่ท่องเที่ยวในประเทศไทย
      </p>

      <Link href="/places">
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded">
          เริ่มค้นหาสถานที่
        </button>
      </Link>

    </main>
  )
}
