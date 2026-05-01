import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/essentials")({
  component: Essentials,
});

function Essentials() {
  return (
    <Layout>
      <section className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>

          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-tight font-bold">
            Essential Things
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Compare prices for everyday essentials, household supplies, and daily routine items. Save money on everyday purchases.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Toiletries",
                price: "₹50 - ₹500",
                description: "Soaps, shampoos, toothpaste, and personal care",
              },
              {
                name: "Clothing",
                price: "₹200 - ₹2,000",
                description: "Shirts, pants, and everyday wear",
              },
              {
                name: "Household Items",
                price: "₹100 - ₹1,000",
                description: "Cleaning supplies, utensils, and storage",
              },
              {
                name: "Electronics",
                price: "₹500 - ₹10,000",
                description: "Chargers, cables, and small gadgets",
              },
              {
                name: "Medicines",
                price: "₹50 - ₹500",
                description: "Common medications and first aid supplies",
              },
              {
                name: "Stationery",
                price: "₹10 - ₹200",
                description: "Books, pens, notebooks, and writing supplies",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-2 border-foreground bg-card p-6 rounded-2xl hover:shadow-bold-sm transition"
              >
                <h3 className="text-2xl font-display">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                <p className="mt-4 text-lg font-bold text-accent">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
