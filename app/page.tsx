export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        TripbuddyTH
      </h1>

      <p className="mb-6">
        เว็บแนะนำสถานที่ท่องเที่ยวทั่วประเทศไทย
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        🌴 สถานที่แนะนำ
      </h2>

      <ul className="mt-4 space-y-2">
        <li>📍 เชียงใหม่ - ดอยอินทนนท์</li>
        <li>📍 กระบี่ - ทะเลอ่าวนาง</li>
        <li>📍 ภูเก็ต - หาดป่าตอง</li>
        <li>📍 กรุงเทพ - วัดพระแก้ว</li>
      </ul>
    </main>
  );
}
