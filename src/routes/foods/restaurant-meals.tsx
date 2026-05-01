import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/foods/restaurant-meals")({
  component: RestaurantMeals,
});

function RestaurantMeals() {
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

          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-tight font-bold">Restaurant Meals</h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Explore typical restaurant meal costs and dining expectations for budget, mid-range, and premium options.
          </p>

          <div className="mt-12 grid gap-6">
            <div className="rounded-3xl border-2 border-foreground bg-card p-8">
              <h2 className="text-3xl font-bold">What to expect</h2>
              <p className="mt-4 text-muted-foreground">
                A simple meal at a local restaurant starts around ₹200, while multi-course dinners can exceed ₹500.</p>
            </div>
            <div className="rounded-3xl border-2 border-foreground bg-card p-8">
              <h2 className="text-3xl font-bold">Best choice</h2>
              <p className="mt-4 text-muted-foreground">
                Choose neighborhood favorites for value, and premium kitchens for a special dining experience.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
