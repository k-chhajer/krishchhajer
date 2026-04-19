import Link from "next/link"

type Adventure = {
  title: string
  description: string
  src: string
  alt: string
  meta: string
  tilt: string
}

const adventures: Adventure[] = [
  {
    title: "Building day",
    description: "Hands-on time with a new build.",
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    alt: "Working on a build in a workshop",
    meta: "Garage · late night",
    tilt: "-rotate-1",
  },
  {
    title: "Friends",
    description: "A weekend out with friends.",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    alt: "Smiling group of friends outdoors",
    meta: "Golden hour · Saturday",
    tilt: "rotate-1",
  },
  {
    title: "Adventures",
    description: "Exploring somewhere new.",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    alt: "Hiking trail with scenic view",
    meta: "Trailhead · 6:40am",
    tilt: "rotate-0",
  },
]

export default function AdventuresPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 transition-colors duration-500 ease-in-out">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-10">
        <header className="space-y-4">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200">
            ← Back home
          </Link>
          <h1 className="text-2xl font-medium text-zinc-100 tracking-tight">Adventures</h1>
          <p className="text-[15px] leading-relaxed max-w-2xl font-light text-zinc-400">
            A living scrapbook of messy builds, long laughs, and tiny detours that turn into whole stories.
          </p>
        </header>

        <section className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {adventures.map((item) => (
            <figure
              key={item.title}
              className={`mb-6 break-inside-avoid rounded-2xl bg-zinc-950/40 border border-zinc-900 shadow-[0_12px_30px_rgba(0,0,0,0.35)] overflow-hidden transition-transform duration-200 hover:-rotate-0 hover:-translate-y-1 ${item.tilt}`}
            >
              <div className="aspect-[4/3] bg-zinc-900">
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <figcaption className="p-5 space-y-2">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.meta}</div>
                <h2 className="text-base font-medium text-zinc-100">{item.title}</h2>
                <p className="text-sm text-zinc-400 font-light">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </section>
      </div>
    </main>
  )
}

