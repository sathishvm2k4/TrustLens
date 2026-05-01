import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/travel")({
  component: Travel,
});

function Travel() {
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
            Travel in India
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Discover real travel costs including destinations, transport, and accommodation prices across India. Plan your budget wisely.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Flights",
                price: "₹3,000 - ₹15,000",
                description: "Domestic flight tickets between major cities",
              },
              {
                name: "Train Travel",
                price: "₹500 - ₹5,000",
                description: "Long-distance rail journeys (AC and non-AC)",
              },
              {
                name: "Hotels",
                price: "₹1,000 - ₹5,000+",
                description: "Accommodation options from budget to luxury",
              },
              {
                name: "Local Transport",
                price: "₹10 - ₹100",
                description: "Auto, taxi, and bus travel within cities",
              },
              {
                name: "Attractions",
                price: "₹50 - ₹500",
                description: "Entry fees for monuments and tourist sites",
              },
              {
                name: "Guided Tours",
                price: "₹500 - ₹2,000",
                description: "Professional guided tours and experiences",
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
