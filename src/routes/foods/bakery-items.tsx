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

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Bread Loaf",
                price: "₹30 - ₹70",
                description: "Sliced bread, white or brown varieties",
              },
              {
                name: "Buns",
                price: "₹10 - ₹25 per piece",
                description: "Soft dinner rolls or burger buns",
              },
              {
                name: "Croissant",
                price: "₹30 - ₹80",
                description: "Buttery flaky pastry, premium bakery item",
              },
              {
                name: "Cookies",
                price: "₹20 - ₹60 per pack",
                description: "Various flavors - chocolate chip, oats, digestive",
              },
              {
                name: "Pastry",
                price: "₹20 - ₹50 per piece",
                description: "Sweet or savory pastries with cream or jam filling",
              },
              {
                name: "Cake",
                price: "₹150 - ₹500",
                description: "Whole cakes for parties or small portions by weight",
              },
              {
                name: "Donut",
                price: "₹15 - ₹40 per piece",
                description: "Glazed or filled donuts, sweet treat",
              },
              {
                name: "Muffin",
                price: "₹30 - ₹80",
                description: "Chocolate, blueberry, or vanilla muffins",
              },
              {
                name: "Brownie",
                price: "₹40 - ₹100",
                description: "Rich chocolate brownie slices",
              },
              {
                name: "Garlic Bread",
                price: "₹50 - ₹120",
                description: "Toasted bread with butter and garlic",
              },
              {
                name: "Cheese Bread",
                price: "₹60 - ₹150",
                description: "Bread topped with melted cheese",
              },
              {
                name: "Biscuits",
                price: "₹30 - ₹100 per pack",
                description: "Various types - tea, cream, or sweet biscuits",
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
