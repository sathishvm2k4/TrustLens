import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/foods/")({
  component: FoodsIndex,
});

function FoodsIndex() {
  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-tight font-bold">
            Foods in India
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Explore real pricing data for street food, groceries, and meal prices across India. Compare costs and find the best deals in different regions.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Street Food",
                price: "₹50 - ₹200",
                description: "Affordable street snacks and quick bites",
                route: "/foods/street-food",
              },
              {
                name: "Groceries",
                price: "Varies",
                description: "Fresh vegetables, fruits, and essentials",
                route: "/foods/groceries",
              },
              {
                name: "Restaurant Meals",
                price: "₹200 - ₹500+",
                description: "Dining out experience across different cuisines",
                route: "/foods/restaurant-meals",
              },
              {
                name: "Bakery Items",
                price: "₹20 - ₹100",
                description: "Bread, pastries, and baked goods",
                route: "/foods/bakery-items",
              },
              {
                name: "Beverages",
                price: "₹10 - ₹150",
                description: "Tea, coffee, juice, and drinks",
                route: "/foods/beverages",
              },
              {
                name: "Breakfast",
                price: "₹100 - ₹300",
                description: "Quick service restaurants and chains",
                route: "/foods/breakfast",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.route}
                className="border-2 border-foreground bg-card p-6 rounded-2xl hover:shadow-bold-sm transition block"
              >
                <h3 className="text-2xl font-display">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                <p className="mt-4 text-lg font-bold text-accent">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
