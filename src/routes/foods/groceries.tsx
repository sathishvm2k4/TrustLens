import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/foods/groceries")({
  component: Groceries,
});

function Groceries() {
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

          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-tight font-bold">Groceries</h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Compare vegetable, fruit, and essential grocery prices across Indian markets to make smarter shopping choices.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Tomatoes",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹20/kg" },
                  { color: "bg-blue-500", label: "₹30/kg" },
                  { color: "bg-red-500", label: "₹40/kg" },
                ],
                description: "Fresh, seasonal tomatoes from local markets",
              },
              {
                name: "Onions",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹25/kg" },
                  { color: "bg-blue-500", label: "₹35/kg" },
                  { color: "bg-red-500", label: "₹50/kg" },
                ],
                description: "Essential cooking ingredient, widely available",
              },
              {
                name: "Potatoes",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹15/kg" },
                  { color: "bg-blue-500", label: "₹25/kg" },
                  { color: "bg-red-500", label: "₹35/kg" },
                ],
                description: "Affordable staple, long shelf life",
              },
              {
                name: "Rice",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹50/kg" },
                  { color: "bg-blue-500", label: "₹100/kg" },
                  { color: "bg-red-500", label: "₹150/kg" },
                ],
                description: "Various grades from budget to premium varieties",
              },
              {
                name: "Wheat Flour",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹30/kg" },
                  { color: "bg-blue-500", label: "₹55/kg" },
                  { color: "bg-red-500", label: "₹80/kg" },
                ],
                description: "Essential for bread and cooking",
              },
              {
                name: "Milk",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹40/L" },
                  { color: "bg-blue-500", label: "₹55/L" },
                  { color: "bg-red-500", label: "₹70/L" },
                ],
                description: "Fresh or packaged milk from local vendors",
              },
              {
                name: "Paneer",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹200/kg" },
                  { color: "bg-blue-500", label: "₹300/kg" },
                  { color: "bg-red-500", label: "₹400/kg" },
                ],
                description: "Indian cottage cheese, protein-rich",
              },
              {
                name: "Eggs",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹50/doz" },
                  { color: "bg-blue-500", label: "₹65/doz" },
                  { color: "bg-red-500", label: "₹80/doz" },
                ],
                description: "Protein source, affordable and nutritious",
              },
              {
                name: "Vegetables Mix",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹30/kg" },
                  { color: "bg-blue-500", label: "₹45/kg" },
                  { color: "bg-red-500", label: "₹60/kg" },
                ],
                description: "Seasonal vegetables bundled at market rates",
              },
              {
                name: "Lentils (Dal)",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹100/kg" },
                  { color: "bg-blue-500", label: "₹175/kg" },
                  { color: "bg-red-500", label: "₹250/kg" },
                ],
                description: "Various types - moong, masur, chana dal",
              },
              {
                name: "Spices",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹50/unit" },
                  { color: "bg-blue-500", label: "₹175/unit" },
                  { color: "bg-red-500", label: "₹300/unit" },
                ],
                description: "Turmeric, chili, cumin, coriander powders",
              },
              {
                name: "Oil",
                image: "", // Add image here later
                note: "Prices are indicative and may vary across\nmarkets",
                badges: [
                  { color: "bg-emerald-500", label: "₹100/L" },
                  { color: "bg-blue-500", label: "₹140/L" },
                  { color: "bg-red-500", label: "₹180/L" },
                ],
                description: "Mustard, sunflower, or coconut oil",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-2 border-foreground bg-card rounded-2xl hover:shadow-bold-sm transition overflow-hidden flex flex-col"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-52 w-full object-cover"
                  />
                ) : (
                  <div className="h-52 w-full bg-muted/20 border-b-2 border-border flex flex-col items-center justify-center text-muted-foreground gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image opacity-50"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                    <span className="text-xs uppercase tracking-wider font-bold opacity-50">Image Space</span>
                  </div>
                )}

                {item.badges ? (
                  <div className="px-4 py-2 bg-gradient-to-r from-slate-50 to-slate-100 flex flex-wrap gap-2 justify-center border-b border-border/40">
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

                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-display cursor-default select-none">{item.name}</h3>
                  {item.note ? (
                    <p className="mt-1 text-xs tracking-[0.08em] text-muted-foreground cursor-default select-none animated-highlight">
                      {item.note}
                    </p>
                  ) : null}
                  {item.description ? (
                    <p className="mt-2 text-sm text-muted-foreground cursor-default select-none">{item.description}</p>
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
