import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/foods/street-food")({
  component: StreetFood,
});

function StreetFood() {
  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
          <Link
            to="/foods"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Foods
          </Link>

          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-tight font-bold">
            Street Food
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Discover popular Indian street food entries, pricing, and what makes them such a delicious budget-friendly choice.
          </p>

          <div className="mt-12 grid gap-6">
            <div className="rounded-3xl border-2 border-foreground bg-card p-8">
              <h2 className="text-3xl font-bold">Popular dishes</h2>
              <p className="mt-4 text-muted-foreground">
                Chaat, vada pav, pav bhaji, kathi rolls, and samosas are among the most-loved street snacks across India.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-foreground bg-card p-8">
              <h2 className="text-3xl font-bold">Price range</h2>
              <p className="mt-4 text-muted-foreground">Typical costs range from ₹50 to ₹200 depending on the city and item.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
