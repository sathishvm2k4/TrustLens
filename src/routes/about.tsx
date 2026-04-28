import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TrustLens" },
      { name: "description", content: "TrustLens is on a mission to make integrity provable. Meet the team and the principles behind the product." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
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
