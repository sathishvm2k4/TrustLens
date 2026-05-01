import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/foods/beverages")({
  component: Beverages,
});

function Beverages() {
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

          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-tight font-bold">Beverages</h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            See how prices vary for tea, coffee, juice, bottled water, and local drinks across different regions.</p>

          <div className="mt-12 grid gap-6">
            <div className="rounded-3xl border-2 border-foreground bg-card p-8">
              <h2 className="text-3xl font-bold">Local favorites</h2>
              <p className="mt-4 text-muted-foreground">
                Masala chai, filter coffee, fresh juice, and coconut water are popular low-cost beverage choices.</p>
            </div>
            <div className="rounded-3xl border-2 border-foreground bg-card p-8">
              <h2 className="text-3xl font-bold">Budget range</h2>
              <p className="mt-4 text-muted-foreground">
                Most drinks range from ₹10 to ₹150 depending on preparation, ingredients, and location.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
