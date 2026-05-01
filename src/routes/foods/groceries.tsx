import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/foods/groceries")({
  component: Groceries,
});

function Groceries() {
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

          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-tight font-bold">Groceries</h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Compare vegetable, fruit, and essential grocery prices across Indian markets to make smarter shopping choices.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Tomatoes",
                price: "₹20 - ₹40 per kg",
                description: "Fresh, seasonal tomatoes from local markets",
              },
              {
                name: "Onions",
                price: "₹25 - ₹50 per kg",
                description: "Essential cooking ingredient, widely available",
              },
              {
                name: "Potatoes",
                price: "₹15 - ₹35 per kg",
                description: "Affordable staple, long shelf life",
              },
              {
                name: "Rice",
                price: "₹50 - ₹150 per kg",
                description: "Various grades from budget to premium varieties",
              },
              {
                name: "Wheat Flour",
                price: "₹30 - ₹80 per kg",
                description: "Essential for bread and cooking",
              },
              {
                name: "Milk",
                price: "₹40 - ₹70 per liter",
                description: "Fresh or packaged milk from local vendors",
              },
              {
                name: "Paneer",
                price: "₹200 - ₹400 per kg",
                description: "Indian cottage cheese, protein-rich",
              },
              {
                name: "Eggs",
                price: "₹50 - ₹80 per dozen",
                description: "Protein source, affordable and nutritious",
              },
              {
                name: "Vegetables Mix",
                price: "₹30 - ₹60 per kg",
                description: "Seasonal vegetables bundled at market rates",
              },
              {
                name: "Lentils (Dal)",
                price: "₹100 - ₹250 per kg",
                description: "Various types - moong, masur, chana dal",
              },
              {
                name: "Spices",
                price: "₹50 - ₹300 per unit",
                description: "Turmeric, chili, cumin, coriander powders",
              },
              {
                name: "Oil",
                price: "₹100 - ₹180 per liter",
                description: "Mustard, sunflower, or coconut oil",
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
