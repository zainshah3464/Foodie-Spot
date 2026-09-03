"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Burger", "Pizza", "Biryani", "Chinese", "BBQ", "Desserts", "Drinks"];

const menuItems = [
  { id: 1, name: "Zinger Burger", price: "PKR 380", category: "Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop" },
  { id: 2, name: "Beef Burger", price: "PKR 450", category: "Burger", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop" },
  { id: 3, name: "Margherita Pizza", price: "PKR 900", category: "Pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop" },
  { id: 4, name: "Pepperoni Pizza", price: "PKR 1200", category: "Pizza", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop" },
  { id: 5, name: "Chicken Biryani", price: "PKR 450", category: "Biryani", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop" },
  { id: 6, name: "Mutton Biryani", price: "PKR 650", category: "Biryani", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop" },
  { id: 7, name: "Chicken Chowmein", price: "PKR 500", category: "Chinese", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop" },
  { id: 8, name: "Fried Rice", price: "PKR 400", category: "Chinese", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop" },
  { id: 9, name: "Chicken Tikka (6 pcs)", price: "PKR 550", category: "BBQ", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop" },
  { id: 10, name: "Seekh Kebab", price: "PKR 600", category: "BBQ", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop" },
  { id: 11, name: "Chocolate Lava Cake", price: "PKR 350", category: "Desserts", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop" },
  { id: 12, name: "Gulab Jamun", price: "PKR 200", category: "Desserts", image: "https://images.unsplash.com/photo-1601303516534-bf1e0b4b8f6f?w=500&auto=format&fit=crop" },
  { id: 13, name: "Fresh Lime Soda", price: "PKR 150", category: "Drinks", image: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500&auto=format&fit=crop" },
  { id: 14, name: "Mango Shake", price: "PKR 250", category: "Drinks", image: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=500&auto=format&fit=crop" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const smoothHeadingY = useSpring(headingY, { stiffness: 60, damping: 20 });

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const createOrderLink = (item: { name: string; price: string }) => {
    const message = `Assalam o Alaikum! I want to order:%0A%0AItem: ${encodeURIComponent(
      item.name
    )}%0APrice: ${encodeURIComponent(item.price)}%0AQty: 1`;
    return `https://wa.me/923710371689?text=${message}`;
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-[#0d0d0d] overflow-hidden"
    >
      {/* Minimal top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          style={{ y: smoothHeadingY }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-neutral-600" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-neutral-400">
              Our Menu
            </span>
            <span className="h-px w-8 bg-neutral-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white"
          >
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Delicious Dishes
            </span>
          </motion.h2>
        </motion.div>

        {/* Category Tabs - Clean underline style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-12 border-b border-neutral-800 pb-px"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 sm:px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                activeCategory === cat
                  ? "text-white"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="category-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-red-500"
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Items Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group bg-[#1a1a1a] border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent" />
                  {/* Category label - subtle */}
                  <span className="absolute top-3 left-3 bg-[#0d0d0d]/80 backdrop-blur-sm text-neutral-400 text-xs px-2.5 py-1 rounded border border-neutral-700">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-medium text-white mb-3">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">{item.price}</span>
                    <a
                      href={createOrderLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 border border-neutral-700 hover:border-green-600 hover:text-green-400 px-4 py-2 rounded transition-all duration-300 active:scale-95"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                      </svg>
                      Order
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;