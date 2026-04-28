import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, ShieldCheck, Eye, Zap, Lock } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrustLens — Verify what matters" },
      { name: "description", content: "Audit-ready transparency for modern teams. Verify every decision in real time." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="inline-block border-2 border-foreground bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest">
              v1.0 — Now in beta
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-bold">
              Verify <em className="not-italic underline decoration-accent decoration-[6px] underline-offset-4">what</em> matters.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              TrustLens gives modern teams audit-ready transparency — so every decision, claim, and number can be proven in seconds, not weeks.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="group inline-flex items-center gap-2 border-2 border-foreground bg-foreground px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-bold transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                Start free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-foreground bg-background px-6 py-3 text-sm font-bold uppercase tracking-wider"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative">
              <div className="border-2 border-foreground bg-card p-8 shadow-bold">
                <div className="flex items-center gap-2 border-b-2 border-foreground pb-3">
                  <div className="h-3 w-3 rounded-full bg-destructive border border-foreground" />
                  <div className="h-3 w-3 rounded-full bg-accent border border-foreground" />
                  <div className="h-3 w-3 rounded-full bg-muted border border-foreground" />
                  <span className="ml-2 text-xs font-mono">trustlens.app/audit</span>
                </div>
                <div className="mt-6 space-y-4 font-mono text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Records verified</span><span className="font-bold">12,847</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Integrity score</span><span className="font-bold text-foreground bg-accent px-2">99.98%</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Anomalies</span><span className="font-bold">0</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Last audit</span><span className="font-bold">2s ago</span></div>
                </div>
                <div className="mt-6 border-t-2 border-foreground pt-4 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4" /> Cryptographically signed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b-2 border-foreground bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl">Built for teams who can't afford to be wrong.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: "Total visibility", body: "Every event, every actor, every change — searchable in milliseconds." },
              { icon: Zap, title: "Real-time alerts", body: "Anomalies surface before they become incidents. Sleep better." },
              { icon: Lock, title: "Tamper-proof", body: "Signed audit trails that hold up in court, in board meetings, and in headlines." },
            ].map((f) => (
              <div key={f.title} className="border-2 border-foreground bg-card p-6 transition-all hover:shadow-bold-sm hover:-translate-x-1 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center border-2 border-foreground bg-accent">
                  <f.icon className="h-6 w-6" strokeWidth={2.5} />
                </div>
                <h3 className="mt-5 font-display text-2xl">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="font-display text-4xl md:text-6xl">Trust, but verify.</h2>
          <p className="mt-4 text-lg opacity-80">Free for the first 30 days. No card required.</p>
          <Link
            to="/signup"
            className="mt-8 inline-flex items-center gap-2 border-2 border-primary-foreground bg-accent text-foreground px-8 py-3 text-sm font-bold uppercase tracking-wider"
          >
            Create your account <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
