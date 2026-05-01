import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Eye, Zap, Lock } from "lucide-react";
import foodImage from "@/assets/food-collage.png";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-32 flex flex-col items-center text-center">

          {/* TEXT */}
          <div className="max-w-full">
            <h1 className="mt-8 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold animate-slideFade">
              Know the real price of Indian things.
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slideFade delay-200">
              TrustLens makes it easy to compare foods, travel, and everyday essentials with real pricing data across Karnataka.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-slideFade delay-300">
              <Link
                to="/signup"
                className="group inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-bold transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
              >
                Start free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-foreground bg-background px-6 py-3 text-sm font-bold uppercase tracking-wider"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* CARDS */}
          <div className="mt-20 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              {
                title: "Foods",
                description: "Street food, groceries, and meal prices across India.",
                route: "/foods",
                images: [
                  foodImage,
                ],
              },
              {
                title: "Travel",
                description: "Destinations, transport, and stay costs for karnataka journeys.",
                route: "/travel",
                images: [
                  "https://www.tusktravel.com/blog/wp-content/uploads/2023/07/Places-to-Visit-in-Karnataka-in-August-1024x672.jpg",
                ],
              },
              {
                title: "Essential things",
                description: "Everyday essentials, supplies, and daily routine needed things.",
                route: "/essentials",
                images: [
                  "https://miro.medium.com/v2/resize:fit:940/1*hwIhTmYbWU4qYjokbcy8BA.jpeg",
                ],
              },
            ].map((section) => (
              <div
                key={section.title}
                className="rounded-4xl border-2 border-foreground bg-card overflow-hidden shadow-bold-sm"
              >
                <div className="grid grid-cols-1 gap-2 p-3">
                  {section.images.map((src, index) => (
                    <Link key={index} to={section.route} className="group relative overflow-hidden rounded-2xl block cursor-pointer">
                      <img
                        src={typeof src === "string" && src.startsWith("http") ? `${src}?auto=format&fit=crop&w=900&q=80` : src}
                        alt={`${section.title} ${index + 1}`}
                        className="h-100 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                      <button className="absolute left-3 bottom-1 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase hover:bg-accent/90 transition cursor-pointer" type="button" onClick={(e) => e.preventDefault()}>
                        Explore
                      </button>
                    </Link>
                  ))}
                </div>

                <div className="border-t-2 border-foreground px-6 py-5 text-left">
                  <h3 className="text-2xl font-display">{section.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
       <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">About</p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[0.95]">
            We believe trust should be <em className="not-italic bg-accent px-2">measurable</em>.
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-3xl">
            TrustLens started with a simple frustration: in a world that runs on data, "trust me" still passes for evidence. We're building the verification layer that modern teams should have had a decade ago.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-foreground bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl">Our principles</h2>
          </div>
          <div className="space-y-6">
            {[
              { n: "01", t: "Transparency by default", b: "If it can be shown, it should be shown." },
              { n: "02", t: "No magic", b: "Every signal is traceable to the action that produced it." },
              { n: "03", t: "Built for the long now", b: "Audits in 10 years should still verify against today's records." },
            ].map((p) => (
              <div key={p.n} className="border-l-4 border-foreground pl-5">
                <p className="font-mono text-xs">{p.n}</p>
                <h3 className="mt-1 font-display text-2xl">{p.t}</h3>
                <p className="mt-1 text-muted-foreground">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </Layout>
    
  );
}