import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/foods/restaurant-meals")({
  component: RestaurantMeals,
});

function RestaurantMeals() {
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

          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-tight font-bold">Restaurant Meals</h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Explore typical restaurant meal costs and dining expectations for budget, mid-range, and premium options.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Local Eatery Thali",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹150" },
                  { color: "bg-blue-500", label: "₹200" },
                  { color: "bg-red-500", label: "₹250" },
                ],
                description: "Complete meal with rice, dal, vegetables, and bread",
              },
              {
                name: "Chinese Restaurant",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹250" },
                  { color: "bg-blue-500", label: "₹375" },
                  { color: "bg-red-500", label: "₹500" },
                ],
                description: "Fried rice, noodles, gravies with meat or vegetables",
              },
              {
                name: "North Indian Diner",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹200" },
                  { color: "bg-blue-500", label: "₹300" },
                  { color: "bg-red-500", label: "₹400" },
                ],
                description: "Butter chicken, paneer curries, naan, roti",
              },
              {
                name: "South Indian Restaurant",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹150" },
                  { color: "bg-blue-500", label: "₹250" },
                  { color: "bg-red-500", label: "₹350" },
                ],
                description: "Idli, dosa, sambar, rasam, and filter coffee",
              },
              {
                name: "Fast Food Burger Joint",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹100" },
                  { color: "bg-blue-500", label: "₹175" },
                  { color: "bg-red-500", label: "₹250" },
                ],
                description: "Burgers, fries, and quick bites with soft drinks",
              },
              {
                name: "Pizza Outlet",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹300" },
                  { color: "bg-blue-500", label: "₹450" },
                  { color: "bg-red-500", label: "₹600" },
                ],
                description: "Various pizza sizes with toppings and sides",
              },
              {
                name: "Multi-Cuisine Premium",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹500" },
                  { color: "bg-blue-500", label: "₹750" },
                  { color: "bg-red-500", label: "₹1000+" },
                ],
                description: "Fine dining experience with global cuisines",
              },
              {
                name: "Biryani Restaurant",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹200" },
                  { color: "bg-blue-500", label: "₹300" },
                  { color: "bg-red-500", label: "₹400" },
                ],
                description: "Chicken or mutton biryani with raita and shorba",
              },
              {
                name: "Continental Cafe",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹400" },
                  { color: "bg-blue-500", label: "₹600" },
                  { color: "bg-red-500", label: "₹800" },
                ],
                description: "Steaks, pasta, grilled items with ambiance",
              },
              {
                name: "Tandoori Grill House",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹300" },
                  { color: "bg-blue-500", label: "₹450" },
                  { color: "bg-red-500", label: "₹600" },
                ],
                description: "Tandoori chicken, kebabs, and grilled specialties",
              },
              {
                name: "Dessert & Cafe",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹100" },
                  { color: "bg-blue-500", label: "₹200" },
                  { color: "bg-red-500", label: "₹300" },
                ],
                description: "Cakes, pastries, coffee, and sweet treats",
              },
              {
                name: "Seafood Restaurant",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹400" },
                  { color: "bg-blue-500", label: "₹650" },
                  { color: "bg-red-500", label: "₹900" },
                ],
                description: "Fish, prawns, crabs with coastal preparations",
              },
              {
                name: "North Karnataka Khanavali Meal",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹100" },
                  { color: "bg-blue-500", label: "₹150" },
                  { color: "bg-red-500", label: "₹200" },
                ],
                description: "Authentic Jolada Rotti, Ennegayi, sprouts, and peanut chutney",
              },
              {
                name: "Girmit with Mirchi Bajji",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹40" },
                  { color: "bg-blue-500", label: "₹60" },
                  { color: "bg-red-500", label: "₹100" },
                ],
                description: "Spicy puffed rice snack served with fried chili fritters",
              },
              {
                name: "Savji Non-Veg Thali",
                image: "", // Add image here later
                note: "Prices are indicative and may vary by location",
                badges: [
                  { color: "bg-emerald-500", label: "₹200" },
                  { color: "bg-blue-500", label: "₹300" },
                  { color: "bg-red-500", label: "₹450" },
                ],
                description: "Extremely spicy mutton or chicken curries with jowar rotis",
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image opacity-50"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
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
                            ? "Average price"
                            : "Premium price"
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
