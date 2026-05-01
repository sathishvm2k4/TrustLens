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

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Masala Chai",
                price: "₹10 - ₹30",
                description: "Spiced tea served hot with milk, India's favorite",
              },
              {
                name: "Filter Coffee",
                price: "₹20 - ₹50",
                description: "South Indian style coffee served in a cup",
              },
              {
                name: "Cold Coffee",
                price: "₹40 - ₹100",
                description: "Iced coffee with milk and sugar, refreshing treat",
              },
              {
                name: "Fresh Juice",
                price: "₹30 - ₹80",
                description: "Orange, mango, or mixed fruit juices",
              },
              {
                name: "Coconut Water",
                price: "₹20 - ₹50",
                description: "Fresh tender coconut water, natural and hydrating",
              },
              {
                name: "Lassi",
                price: "₹25 - ₹60",
                description: "Sweet or salted yogurt drink, cooling in summer",
              },
              {
                name: "Sugarcane Juice",
                price: "₹20 - ₹50",
                description: "Fresh pressed sweet juice, street vendor special",
              },
              {
                name: "Lemonade",
                price: "₹15 - ₹40",
                description: "Fresh lime juice with sugar and salt",
              },
              {
                name: "Bottled Water",
                price: "₹10 - ₹30",
                description: "Packaged drinking water, 500ml bottles",
              },
              {
                name: "Soft Drinks",
                price: "₹30 - ₹80",
                description: "Cola, lemonade, or other branded beverages",
              },
              {
                name: "Badam Milk",
                price: "₹40 - ₹100",
                description: "Almond milk drink with cardamom, nutritious",
              },
              {
                name: "Buttermilk",
                price: "₹20 - ₹50",
                description: "Spiced or plain buttermilk, aid to digestion",
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
