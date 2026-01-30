import Link from "next/link"

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        }}
      >
        <div className="bg-black/40 backdrop-blur-md text-white p-12 rounded-2xl text-center shadow-2xl">

          <h1 className="text-6xl font-bold mb-4">
            Explore Thailand
          </h1>

          <p className="text-xl mb-6">
            ค้นหาทริปและไกด์เที่ยวทั่วไทยในที่เดียว
          </p>

          <Link href="/places">
            <button className="bg-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 hover:bg-blue-700 transition">
              เริ่มวางแผนทริป
            </button>
          </Link>

        </div>
      </section>


      {/* POPULAR */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          🔥 จุดหมายยอดนิยม
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              name: "เชียงใหม่",
              img: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e",
            },
            {
              name: "กระบี่",
              img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
            },
            {
              name: "ภูเก็ต",
              img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="group bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={p.img}
                className="h-64 w-full object-cover group-hover:scale-110 transition"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="text-gray-600 mt-2">
                  สถานที่ท่องเที่ยวยอดนิยม
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* FEATURES */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 text-center">

        <h2 className="text-4xl font-bold mb-10">
          ทำไมต้อง TripbuddyTH?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {[
            "ค้นหาไกด์ท้องถิ่นได้",
            "แพ็คเกจราคาคุ้มค่า",
            "วางแผนเที่ยวสะดวก",
          ].map((f, i) => (
            <div key={i} className="bg-white/20 p-8 rounded-xl backdrop-blur-md">
              <p className="text-xl font-semibold">{f}</p>
            </div>
          ))}

        </div>

      </section>


      {/* CTA */}
      <section className="text-center py-20">

        <h2 className="text-4xl font-bold mb-6">
          พร้อมออกเดินทางแล้วหรือยัง?
        </h2>

        <Link href="/marketplace">
          <button className="bg-purple-600 text-white px-10 py-4 rounded-xl text-lg hover:scale-105 transition">
            ดูแพ็คเกจท่องเที่ยว
          </button>
        </Link>

      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-10">
        <h3 className="text-xl font-bold">TripbuddyTH</h3>
        <p className="text-gray-400 mt-2">
          Tourism Marketplace Demo Project
        </p>
      </footer>

    </main>
  )
}
