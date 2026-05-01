import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import pavBhajiImage from "@/assets/pavbhaji.png";
import vadaPavImage from "@/assets/Vadapav.png";
import samosaImage from "@/assets/samosa.png";
import chaatImage from "@/assets/chaat.png";
import kathiRollImage from "@/assets/khatiroll.png";
import panipuriImage from "@/assets/panipuri(golgappa).png";
import alooTikkiImage from "@/assets/aloo-tikki.png";
import jalebiImage from "@/assets/jalebi.png";
import bhelPuriImage from "@/assets/bhel-puri.png";
import momosImage from "@/assets/momos.png";
import frankieImage from "@/assets/Schezwan-paneer-frankie.png";

export const Route = createFileRoute("/foods/street-food")({
  component: StreetFood,
});

function StreetFood() {
  return (
    <Layout>
      <style>
        {`
          .badge-tooltip {
            position: relative;
          }
          .badge-tooltip::after {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 120%;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 6px 8px;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.1s ease-in-out;
            z-index: 10;
          }
          .badge-tooltip:hover::after {
            opacity: 1;
          }

          .animated-highlight {
            background: linear-gradient(90deg, transparent 0%, rgba(217, 119, 6, 0.55) 30%, rgba(217, 119, 6, 0.55) 70%, transparent 100%);
            background-size: 300% 100%;
            background-repeat: no-repeat;
            background-position: 0 0;
            animation: highlight-slide 8s linear infinite;
            display: block;
            width: 100%;
            white-space: pre-line;
            padding: 0.15rem 0.25rem;
          }

          @keyframes highlight-slide {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 100% 0;
            }
          }
        `}
      </style>
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

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Pav Bhaji",
                image: pavBhajiImage,
                note: "Prices are indicative and may vary across street\nvendors",
                badges: [
                  { color: "bg-emerald-500", label: "₹40" },
                  { color: "bg-blue-500", label: "₹80" },
                  { color: "bg-red-500", label: "₹100" },
                ],
              },
              {
                name: "Vada Pav",
                image: vadaPavImage,
                note: "Prices are indicative and may vary across street\nvendors",
                badges: [
                  { color: "bg-emerald-500", label: "₹20" },
                  { color: "bg-blue-500", label: "₹50" },
                  { color: "bg-red-500", label: "₹80" },
                ],
                description: "Deep-fried potato dumpling with spicy chutney and bread",
              },
              {
                name: "Samosa",
                image: samosaImage,
                note: "Prices are indicative and may vary across street\nvendors",
                badges: [
                  { color: "bg-emerald-500", label: "₹10" },
                  { color: "bg-blue-500", label: "₹30" },
                  { color: "bg-red-500", label: "₹50" },
                ],
                description: "Crispy triangular pastry filled with spiced potatoes and peas",
              },
              {
                name: "Chaat",
                image: chaatImage,
                note: "Prices are indicative and may vary across street\nvendors",
                badges: [
                  { color: "bg-emerald-500", label: "₹30" },
                  { color: "bg-blue-500", label: "₹70" },
                  { color: "bg-red-500", label: "₹100" },
                ],
                description: "Crispy snack with yogurt, tamarind, and spices",
              },
              {
                name: "Kathi Roll",
                image: kathiRollImage,
                note: "Prices are indicative and may vary across street\nvendors",
                badges: [
                  { color: "bg-emerald-500", label: "₹50" },
                  { color: "bg-blue-500", label: "₹120" },
                  { color: "bg-red-500", label: "₹160" },
                ],
                description: "Spiced meat or vegetable wrapped in paratha bread",
              },
              {
                name: "Panipuri (Golgappas)",
                image: panipuriImage,
                note: "Prices are indicative and may vary across street\nvendors",
                badges: [
                  { color: "bg-emerald-500", label: "₹20" },
                  { color: "bg-blue-500", label: "₹50" },
                  { color: "bg-red-500", label: "₹70" },
                ],
                description: "Crispy shells filled with spiced potato and tangy water",
              },
              {
                name: "Aloo Tikki",
                image: alooTikkiImage,
                note: "Prices are indicative and may vary across street\nvendors",
                badges: [
                  { color: "bg-emerald-500", label: "₹20" },
                  { color: "bg-blue-500", label: "₹50" },
                  { color: "bg-red-500", label: "₹80" },
                ],
                description: "Fried potato patty served with chutney and yogurt",
              },
              {
                name: "Jalebi",
                image: jalebiImage,
                note: "Prices are indicative and may vary across street\nvendors",
                badges: [
                  { color: "bg-emerald-500", label: "₹30" },
                  { color: "bg-blue-500", label: "₹60" },
                  { color: "bg-red-500", label: "₹100" },
                ],
                description: "Sweet spiral pastry soaked in sugar syrup",
              },
              {
                name: "Bhel Puri",
                image: bhelPuriImage,
                note: "Prices are indicative and may vary across street\nvendors",
                badges: [
                  { color: "bg-emerald-500", label: "₹20" },
                  { color: "bg-blue-500", label: "₹60" },
                  { color: "bg-red-500", label: "₹100" },
                ],
                description: "Puffed rice with vegetables, tamarind, and chutney",
              },
              {
                name: "Momos",
                image: momosImage,
                note: "Prices are indicative and may vary across street\nvendors",
                badges: [
                  { color: "bg-emerald-500", label: "₹30" },
                  { color: "bg-blue-500", label: "₹80" },
                  { color: "bg-red-500", label: "₹130" },
                ],
                description: "Steamed dumplings filled with meat or vegetables",
              },
              {
                name: "Frankie",
                image: frankieImage,
                note: "Prices are indicative and may vary across street\nvendors",
                badges: [
                  { color: "bg-emerald-500", label: "₹50" },
                  { color: "bg-blue-500", label: "₹150" },
                  { color: "bg-red-500", label: "₹200" },
                ],
                description: "Wrapped grilled paratha with meat, vegetables, and sauces",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-2 border-foreground bg-card rounded-2xl hover:shadow-bold-sm transition overflow-hidden"
              >
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-52 w-full object-cover"
                    />
                    {item.badges ? (
                      <div className="px-4 py-2 bg-gradient-to-r from-slate-50 to-slate-100 flex flex-wrap gap-2 justify-center">
                        {item.badges.map((badge) => (
                          <span
                            key={badge.label}
                            data-tooltip={
                              badge.color === "bg-emerald-500"
                                ? "Minimum price"
                                : badge.color === "bg-blue-500"
                                ? "Maximum price"
                                : "Extra price"
                            }
                            className={`badge-tooltip inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer select-none ${badge.color} hover:scale-105`}
                          >
                            <span className="h-2 w-2 rounded-full bg-white/80 shadow-sm" />
                            {badge.label}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : null}
                <div className="p-4">
                  <h3 className="text-xl font-display cursor-default select-none">{item.name}</h3>
                  {item.note ? (
                    <p className="mt-1 text-xs tracking-[0.08em] text-muted-foreground cursor-default select-none animated-highlight">
                      {item.note}
                    </p>
                  ) : null}
                  {item.description ? (
                    <p className="mt-2 text-sm text-muted-foreground cursor-default select-none">{item.description}</p>
                  ) : null}
                  {item.price ? (
                    <p className="mt-4 text-lg font-bold text-accent cursor-default select-none">{item.price}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
