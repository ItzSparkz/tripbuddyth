import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="font-bold">TripbuddyTH</h1>
        <div className="space-x-4">
          <Link href="/">หน้าแรก</Link>
          <Link href="/places">สถานที่</Link>
          <Link href="/about">เกี่ยวกับ</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold">
          เว็บแนะนำท่องเที่ยวไทย
        </h2>

        <Link href="/places">
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded">
            ดูสถานที่ท่องเที่ยว
          </button>
        </Link>
      </section>

    </main>
  )
}
