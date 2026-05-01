import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/foods/bakery-items")({
  component: BakeryItems,
});

function BakeryItems() {
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

          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-tight font-bold">Bakery Items</h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Find bakery pricing for breads, cakes, pastries, and sweets, along with notes on quality and portion sizing.
          </p>

          <div className="mt-12 grid gap-6">
            <div className="rounded-3xl border-2 border-foreground bg-card p-8">
              <h2 className="text-3xl font-bold">What you can buy</h2>
              <p className="mt-4 text-muted-foreground">
                Fresh buns, croissants, cookies, and rolls often cost between ₹20 and ₹100 depending on size and ingredients.</p>
            </div>
            <div className="rounded-3xl border-2 border-foreground bg-card p-8">
              <h2 className="text-3xl font-bold">Shopping tip</h2>
              <p className="mt-4 text-muted-foreground">
                Local bakeries usually offer the best prices, while premium cafés charge more for artisan baked goods.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
