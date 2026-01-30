import Link from "next/link"

export default function Home(){
return(
<main>

{/* HERO */}
<section
className="h-[95vh] flex items-center justify-center text-white text-center relative"
style={{
backgroundImage:"url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<div className="absolute inset-0 bg-black/60"/>

<div className="relative z-10 backdrop-blur-md bg-white/10 p-14 rounded-2xl shadow-2xl">

<h1 className="text-7xl font-bold mb-6 animate-pulse">
Discover Thailand
</h1>

<p className="text-xl mb-8">
แพลตฟอร์มท่องเที่ยว + ไกด์ + แพ็คเกจราคาดี
</p>

<Link href="/marketplace">
<button className="bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-5 rounded-xl text-xl hover:scale-110 transition">
Start Your Journey
</button>
</Link>

</div>
</section>


{/* DESTINATIONS */}
<section className="max-w-6xl mx-auto py-24 px-6">

<h2 className="text-4xl font-bold text-center mb-16">
🔥 Trending Destinations
</h2>

<div className="grid md:grid-cols-3 gap-12">

{[
{n:"เชียงใหม่",i:"https://images.unsplash.com/photo-1598971861713-54ad16a7e72e"},
{n:"กระบี่",i:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd"},
{n:"ภูเก็ต",i:"https://images.unsplash.com/photo-1589394815804-964ed0be2eb5"},
].map((p,i)=>(
<div key={i}
className="group bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
>

<img src={p.i}
className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
/>

<div className="p-6 text-center">
<h3 className="text-2xl font-bold">{p.n}</h3>
<p className="text-gray-600 mt-2">Popular destination</p>
</div>

</div>
))}

</div>
</section>


{/* REVIEWS */}
<section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">

<h2 className="text-4xl font-bold text-center mb-14">
💬 Traveler Reviews
</h2>

<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">

{[
"Best trip ever!",
"Guide friendly & professional",
"Saved my budget a lot",
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
Ready for adventure?
</h2>

<Link href="/login">
<button className="bg-purple-600 text-white px-14 py-6 text-xl rounded-xl hover:scale-110 transition">
Join Now
</button>
</Link>

</section>


<footer className="bg-black text-white text-center py-12">
<h3 className="text-2xl font-bold">TripbuddyTH</h3>
<p className="text-gray-400 mt-3">
Final Boss Demo Version
</p>
</footer>

</main>
)}
