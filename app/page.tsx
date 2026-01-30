import Link from "next/link"

export default function Home() {
  return (
    <main>

      <section
        className="h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:"url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')"
        }}
      >
        <div className="bg-black/50 p-10 rounded-xl text-center">
          <h1 className="text-5xl font-bold">TripbuddyTH</h1>
          <p className="mt-4">วางแผนเที่ยวไทยง่าย ๆ</p>

          <Link href="/places">
            <button className="mt-6 bg-blue-600 px-6 py-3 rounded">
              เริ่มค้นหาที่เที่ยว
            </button>
          </Link>
        </div>
      </section>


      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          สถานที่ยอดนิยม
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {name:"เชียงใหม่",img:"https://images.unsplash.com/photo-1598971861713-54ad16a7e72e"},
            {name:"กระบี่",img:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd"},
            {name:"ภูเก็ต",img:"https://images.unsplash.com/photo-1589394815804-964ed0be2eb5"},
          ].map((p,i)=>(
            <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
              <img src={p.img} className="h-56 w-full object-cover"/>
              <div className="p-4 font-bold">{p.name}</div>
            </div>
          ))}

        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6">
        TripbuddyTH © 2025
      </footer>

    </main>
  )
}
