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

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Pav Bhaji",
                price: "₹40 - ₹80",
                description: "Spiced vegetable curry with buttered bread rolls",
              },
              {
                name: "Vada Pav",
                price: "₹20 - ₹50",
                description: "Deep-fried potato dumpling with spicy chutney and bread",
              },
              {
                name: "Samosa",
                price: "₹10 - ₹30",
                description: "Crispy triangular pastry filled with spiced potatoes and peas",
              },
              {
                name: "Chaat",
                price: "₹30 - ₹70",
                description: "Crispy snack with yogurt, tamarind, and spices",
              },
              {
                name: "Kathi Roll",
                price: "₹50 - ₹120",
                description: "Spiced meat or vegetable wrapped in paratha bread",
              },
              {
                name: "Panipuri (Golgappas)",
                price: "₹20 - ₹50",
                description: "Crispy shells filled with spiced potato and tangy water",
              },
              {
                name: "Dosa",
                price: "₹40 - ₹100",
                description: "South Indian crepe with rice and lentil batter",
              },
              {
                name: "Aloo Tikki",
                price: "₹20 - ₹50",
                description: "Fried potato patty served with chutney and yogurt",
              },
              {
                name: "Jalebi",
                price: "₹30 - ₹60",
                description: "Sweet spiral pastry soaked in sugar syrup",
              },
              {
                name: "Bhel Puri",
                price: "₹25 - ₹60",
                description: "Puffed rice with vegetables, tamarind, and chutney",
              },
              {
                name: "Momos",
                price: "₹30 - ₹80",
                description: "Steamed dumplings filled with meat or vegetables",
              },
              {
                name: "Frankie",
                price: "₹60 - ₹150",
                description: "Wrapped grilled paratha with meat, vegetables, and sauces",
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
