export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold">TripbuddyTH</h1>
        <p className="mt-4 text-xl">
          เว็บแนะนำสถานที่ท่องเที่ยวทั่วประเทศไทย
        </p>

        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          เริ่มวางแผนเที่ยว
        </button>
      </section>


      {/* ABOUT */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold">เกี่ยวกับเรา</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          TripbuddyTH เป็นเว็บแอปพลิเคชันที่ช่วยแนะนำสถานที่ท่องเที่ยวในประเทศไทย
          เพื่อให้นักท่องเที่ยวสามารถวางแผนการเดินทางได้ง่าย สะดวก และรวดเร็ว
        </p>
      </section>


      {/* DESTINATIONS */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          🌴 สถานที่แนะนำ
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">เชียงใหม่</h3>
            <p className="text-gray-600 mt-2">
              ดอยอินทนนท์ จุดสูงสุดของประเทศไทย
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">กระบี่</h3>
            <p className="text-gray-600 mt-2">
              ทะเลอ่าวนาง น้ำใส หาดสวยระดับโลก
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">ภูเก็ต</h3>
            <p className="text-gray-600 mt-2">
              หาดป่าตอง เมืองท่องเที่ยวยอดนิยม
            </p>
          </div>

        </div>
      </section>


      {/* FEATURES */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">
          ฟีเจอร์ของเว็บ
        </h2>

        <div className="space-y-3 text-lg text-gray-700">
          <p>✅ ค้นหาสถานที่ท่องเที่ยว</p>
          <p>✅ แนะนำสถานที่ยอดนิยม</p>
          <p>✅ วางแผนทริปได้ง่าย</p>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>© 2025 TripbuddyTH</p>
        <p className="text-sm mt-2">
          โปรเจคจบเพื่อการศึกษา
        </p>
      </footer>

    </main>
  )
}
