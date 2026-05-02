import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

import akkiRottiImage from "@/assets/Akkirotti.png";
import idliVadaImage from "@/assets/idli-vada.png";
import masalaDosaImage from "@/assets/MasalaDosa.png";
import neerDosaImage from "@/assets/Neer-Dosa.png";
import shavgeBathImage from "@/assets/Shavge-Bath.png";
import mangaloreBunsImage from "@/assets/Manglore-Buns.png";
import setDosaImage from "@/assets/Set-Dosa.png";
import ravaIdliImage from "@/assets/Rava-Idli.png";
import bisiBeleBathImage from "@/assets/Bisi Bele Bath.png";
import upmaImage from "@/assets/Upma.png";
import pohaImage from "@/assets/poha.png";

export const Route = createFileRoute("/foods/breakfast")({
  component: Breakfast,
});

function Breakfast() {
  const breakfastItems = [
    {
      name: "Masala Dosa",
      image: masalaDosaImage,
      description: "Crispy dosa filled with spiced potato masala, served with chutney and sambar.",
      badges: [
        { color: "bg-emerald-500", label: "₹40" },
        { color: "bg-blue-500", label: "₹90" },
        { color: "bg-red-500", label: "₹140" },
      ],
    },
    {
      name: "Neer Dosa",
      image: neerDosaImage,
      description: "Soft, lace-thin rice crepes popular along the Karnataka coast.",
      badges: [
        { color: "bg-emerald-500", label: "₹35" },
        { color: "bg-blue-500", label: "₹80" },
        { color: "bg-red-500", label: "₹130" },
      ],
    },
    {
  name: "Idli Vada",
  image: idliVadaImage,
  description: "A classic South Indian breakfast featuring soft steamed idlis paired with crispy medu vada, served with chutney and hot sambar.",
  badges: [
    { color: "bg-emerald-500", label: "₹35" },
    { color: "bg-blue-500", label: "₹80" },
    { color: "bg-red-500", label: "₹130" },
  ],
},
    {
      name: "Shavige Bath",
      image: shavgeBathImage,
      description: "Light and flavorful vermicelli dish cooked with vegetables and aromatic spices.",
      badges: [
        { color: "bg-emerald-500", label: "₹30" },
        { color: "bg-blue-500", label: "₹70" },
        { color: "bg-red-500", label: "₹120" },
      ],
    },
    {
      name: "Mangalore Buns",
      image: mangaloreBunsImage,
      description: "Sweet, fluffy banana puris that are golden, soft, and irresistible.",
      badges: [
        { color: "bg-emerald-500", label: "₹25" },
        { color: "bg-blue-500", label: "₹60" },
        { color: "bg-red-500", label: "₹110" },
      ],
    },
    {
      name: "Set Dosa",
      image: setDosaImage,
      description: "A set of soft, spongy dosas served with vegetable saagu and chutney.",
      badges: [
        { color: "bg-emerald-500", label: "₹35" },
        { color: "bg-blue-500", label: "₹80" },
        { color: "bg-red-500", label: "₹130" },
      ],
    },
    {
      name: "Rava Idli",
      image: ravaIdliImage,
      description: "Steamed semolina idlis, soft and fluffy with a mild, savory flavor.",
      badges: [
        { color: "bg-emerald-500", label: "₹30" },
        { color: "bg-blue-500", label: "₹70" },
        { color: "bg-red-500", label: "₹120" },
      ],
    },
    {
      name: "Bisi Bele Bath",
      image: bisiBeleBathImage,
      description: "Hearty rice and lentil dish cooked with vegetables and signature spices.",
      badges: [
        { color: "bg-emerald-500", label: "₹45" },
        { color: "bg-blue-500", label: "₹100" },
        { color: "bg-red-500", label: "₹150" },
      ],
    },
    {
      name: "Upma",
      image: upmaImage,
      description: "Classic savory semolina breakfast with vegetables and tempered spices.",
      badges: [
        { color: "bg-emerald-500", label: "₹25" },
        { color: "bg-blue-500", label: "₹60" },
        { color: "bg-red-500", label: "₹110" },
      ],
    },
    {
      name: "Poha",
      image: pohaImage,
      description: "Flattened rice sautéed with onions, peanuts, and fragrant spices.",
      badges: [
        { color: "bg-emerald-500", label: "₹20" },
        { color: "bg-blue-500", label: "₹50" },
        { color: "bg-red-500", label: "₹100" },
      ],
    },
    {
      name: "Akki Rotti",
      image: akkiRottiImage,
      description: "Traditional Karnataka rice flatbread served with chutney or curry.",
      badges: [
        { color: "bg-emerald-500", label: "₹40" },
        { color: "bg-blue-500", label: "₹90" },
        { color: "bg-red-500", label: "₹140" },
      ],
    },
  ];

  return (
    <Layout>
      <style>{`
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
          animation: highlight-slide 8s linear infinite;
          display: block;
          width: 100%;
          padding: 0.15rem 0.25rem;
        }

        @keyframes highlight-slide {
          0% { background-position: 0 0; }
          100% { background-position: 100% 0; }
        }
      `}</style>

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
            Breakfast
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Explore delicious Indian breakfast favorites, from traditional Karnataka specialties to popular morning classics.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakfastItems.map((item, index) => (
              <div
                key={index}
                className="border-2 border-foreground bg-card rounded-2xl hover:shadow-bold-sm transition overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 w-full object-cover"
                />

                <div className="px-4 py-2 bg-gradient-to-r from-slate-50 to-slate-100 flex flex-wrap gap-2 justify-center">
                  {item.badges.map((badge) => (
                    <span
                      key={badge.label}
                      data-tooltip={
                        badge.color === "bg-emerald-500"
                          ? "Minimum price"
                          : badge.color === "bg-blue-500"
                          ? "Maximum price"
                          : "extra price"
                      }
                      className={`badge-tooltip inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer select-none ${badge.color} hover:scale-105`}
                    >
                      <span className="h-2 w-2 rounded-full bg-white/80 shadow-sm" />
                      {badge.label}
                    </span>
                  ))}
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-display">{item.name}</h3>
                  <p className="mt-1 text-xs tracking-[0.08em] text-muted-foreground animated-highlight">
                    Prices are indicative and may vary across restaurants
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
