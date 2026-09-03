"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Ahmed Raza",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    text: "Best biryani in town! Order came fast and hot. Highly recommended!",
    dish: "Chicken Biryani",
  },
  {
    name: "Fatima Khan",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    text: "The zinger burger is amazing. WhatsApp ordering was so easy.",
    dish: "Zinger Burger",
  },
  {
    name: "Bilal Ahmed",
    avatar: "https://i.pravatar.cc/150?img=56",
    rating: 4,
    text: "Great taste, reasonable prices. Will order again!",
    dish: "Pepperoni Pizza",
  },
  {
    name: "Ayesha Siddiqui",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "Fresh and hygienic food. The BBQ platter was superb!",
    dish: "BBQ Platter",
  },
];

const Reviews = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle scroll-driven quote movement
  const quoteY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const smoothQuoteY = useSpring(quoteY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-[#0d0d0d] overflow-hidden"
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Background decorative quote */}
      <motion.div
        style={{ y: smoothQuoteY }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 text-[200px] md:text-[300px] font-serif text-neutral-800/20 pointer-events-none select-none leading-none"
      >
        "
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-neutral-600" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-neutral-400">
              Testimonials
            </span>
            <span className="h-px w-8 bg-neutral-600" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white"
          >
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Customers Say
            </span>
          </motion.h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -4 }}
              className="flex flex-col bg-[#1a1a1a] border border-neutral-800 rounded-lg p-6 hover:border-neutral-700 transition-colors duration-300 h-full"
            >
              {/* Avatar and Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-700 shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-white">{review.name}</h3>
                  <p className="text-xs text-neutral-500">Ordered {review.dish}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className={`w-4 h-4 ${
                      starIndex < review.rating
                        ? "text-orange-400 fill-current"
                        : "text-neutral-700 fill-current"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-400 text-sm leading-relaxed italic flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;