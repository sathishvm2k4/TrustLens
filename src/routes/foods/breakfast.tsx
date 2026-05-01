import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/foods/breakfast")({
  component: Breakfast,
});

function Breakfast() {
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

          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-tight font-bold">Breakfast</h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Compare breakfast pricing for quick-service options, local cafés, and traditional Indian morning meals.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Poha",
                price: "₹30 - ₹70",
                description: "Flattened rice with potatoes and peanuts",
              },
              {
                name: "Upma",
                price: "₹40 - ₹80",
                description: "Savory semolina dish with vegetables and spices",
              },
              {
                name: "Idli",
                price: "₹20 - ₹50",
                description: "Steamed rice cake, soft and light",
              },
              {
                name: "Dosa",
                price: "₹40 - ₹100",
                description: "South Indian crepe with chutney and sambar",
              },
              {
                name: "Uttapam",
                price: "₹50 - ₹100",
                description: "Thick pancake-like crepe with toppings",
              },
              {
                name: "Paratha",
                price: "₹30 - ₹80",
                description: "Stuffed bread with potatoes, paneer, or egg",
              },
              {
                name: "Toast & Egg",
                price: "₹40 - ₹100",
                description: "Buttered toast with scrambled or fried eggs",
              },
              {
                name: "Oatmeal/Cereal",
                price: "₹50 - ₹120",
                description: "With milk, honey, and fresh fruits",
              },
              {
                name: "Bread Pakora",
                price: "₹30 - ₹60",
                description: "Fried spiced bread slices, crispy and hot",
              },
              {
                name: "Aloo Puri",
                price: "₹50 - ₹100",
                description: "Deep-fried bread with spiced potato curry",
              },
              {
                name: "Breakfast Combo",
                price: "₹150 - ₹300",
                description: "From chains with multiple items and a drink",
              },
              {
                name: "Cornflakes Bowl",
                price: "₹60 - ₹150",
                description: "Cereal with milk and fruits or yogurt",
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
