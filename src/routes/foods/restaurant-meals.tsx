import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/foods/restaurant-meals")({
  component: RestaurantMeals,
});

function RestaurantMeals() {
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

          <h1 className="mt-8 font-display text-4xl md:text-6xl leading-tight font-bold">Restaurant Meals</h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Explore typical restaurant meal costs and dining expectations for budget, mid-range, and premium options.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Local Eatery Thali",
                price: "₹150 - ₹250",
                description: "Complete meal with rice, dal, vegetables, and bread",
              },
              {
                name: "Chinese Restaurant",
                price: "₹250 - ₹500",
                description: "Fried rice, noodles, gravies with meat or vegetables",
              },
              {
                name: "North Indian Diner",
                price: "₹200 - ₹400",
                description: "Butter chicken, paneer curries, naan, roti",
              },
              {
                name: "South Indian Restaurant",
                price: "₹150 - ₹350",
                description: "Idli, dosa, sambar, rasam, and filter coffee",
              },
              {
                name: "Fast Food Burger Joint",
                price: "₹100 - ₹250",
                description: "Burgers, fries, and quick bites with soft drinks",
              },
              {
                name: "Pizza Outlet",
                price: "₹300 - ₹600",
                description: "Various pizza sizes with toppings and sides",
              },
              {
                name: "Multi-Cuisine Premium",
                price: "₹500 - ₹1000+",
                description: "Fine dining experience with global cuisines",
              },
              {
                name: "Biryani Restaurant",
                price: "₹200 - ₹400",
                description: "Chicken or mutton biryani with raita and shorba",
              },
              {
                name: "Continental Cafe",
                price: "₹400 - ₹800",
                description: "Steaks, pasta, grilled items with ambiance",
              },
              {
                name: "Tandoori Grill House",
                price: "₹300 - ₹600",
                description: "Tandoori chicken, kebabs, and grilled specialties",
              },
              {
                name: "Dessert & Cafe",
                price: "₹100 - ₹300",
                description: "Cakes, pastries, coffee, and sweet treats",
              },
              {
                name: "Seafood Restaurant",
                price: "₹400 - ₹900",
                description: "Fish, prawns, crabs with coastal preparations",
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
