import Link from "next/link"

export default function Home(){
return(
<main>

{/* HERO */}
<section
className="h-[90vh] flex items-center justify-center text-white text-center relative"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<div className="absolute inset-0 bg-black/50"/>

<div className="relative z-10 backdrop-blur-md bg-white/10 p-12 rounded-2xl shadow-2xl animate-fade-in">

<h1 className="text-6xl font-bold mb-6">
Discover Thailand
</h1>

<p className="text-xl mb-8">
แพลตฟอร์มค้นหาไกด์และแพ็คเกจท่องเที่ยวทั่วไทย
</p>

<Link href="/marketplace">
<button className="bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-4 rounded-xl text-lg hover:scale-110 transition">
เริ่มต้นการเดินทาง
</button>
</Link>

</div>
</section>


{/* POPULAR */}
<section className="max-w-6xl mx-auto py-24 px-6">

<h2 className="text-4xl font-bold text-center mb-14">
🌏 Popular Destinations
</h2>

<div className="grid md:grid-cols-3 gap-12">

{[
{n:"เชียงใหม่",i:"https://images.unsplash.com/photo-1598971861713-54ad16a7e72e"},
{n:"กระบี่",i:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd"},
{n:"ภูเก็ต",i:"https://images.unsplash.com/photo-1589394815804-964ed0be2eb5"},
].map((p,i)=>(
<div key={i}
className="group bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
>

<img src={p.i}
className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
/>

<div className="p-6 text-center">
<h3 className="text-2xl font-bold">{p.n}</h3>
<p className="text-gray-600 mt-2">จุดหมายยอดนิยม</p>
</div>

</div>
))}

</div>
</section>


{/* REVIEWS */}
<section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">

<h2 className="text-4xl font-bold text-center mb-14">
💬 รีวิวจากนักท่องเที่ยว
</h2>

<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">

{[
"ทริปดีมาก ไกด์เป็นกันเอง",
"จองง่าย ใช้งานสะดวก",
"ได้ราคาดีกว่าเที่ยวเอง",
].map((r,i)=>(
<div key={i} className="bg-white/20 p-8 rounded-xl backdrop-blur-md">
⭐️⭐️⭐️⭐️⭐️
<p className="mt-4">{r}</p>
</div>
))}

</div>
</section>


{/* CTA */}
<section className="text-center py-24">

<h2 className="text-5xl font-bold mb-8">
Ready for your next trip?
</h2>

<Link href="/places">
<button className="bg-purple-600 text-white px-12 py-5 text-xl rounded-xl hover:scale-110 transition">
Explore Now
</button>
</Link>

</section>


{/* FOOTER */}
<footer className="bg-black text-white text-center py-12">
<h3 className="text-2xl font-bold">TripbuddyTH</h3>
<p className="text-gray-400 mt-3">
Tourism Marketplace Demo • Project Version
</p>
</footer>

</main>
)}
