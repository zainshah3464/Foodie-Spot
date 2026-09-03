"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  animate,
} from "framer-motion";
import Image from "next/image";

/* ========== Counter (Fixed) ========== */
const Counter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      const controls = animate(0, numericValue, {
        duration: 1.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  const suffix = value.includes("+") ? "+" : value.includes("k") ? "k+" : "";

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl font-semibold text-white tabular-nums inline-block"
    >
      {displayValue}
      {suffix}
    </span>
  );
};

/* ========== Main About Component ========== */
const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const smoothImageY = useSpring(imageY, { stiffness: 55, damping: 18 });

  // Scroll-driven text reveal (left column moves slightly)
  const textY = useTransform(scrollYProgress, [0, 0.3, 1], [40, 0, -20]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const smoothTextY = useSpring(textY, { stiffness: 80, damping: 20 });

  // Scroll progress bar (horizontal line at top of section)
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "50+", label: "Signature Dishes" },
    { value: "5k+", label: "Happy Customers" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-[#0d0d0d] overflow-hidden"
    >
      {/* Scroll progress indicator - thin orange line at top */}
      <motion.div
        style={{ scaleX: progressScaleX }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-red-600 origin-left"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ===== Left: Content with scroll-driven entrance ===== */}
          <motion.div
            style={{ y: smoothTextY, opacity: textOpacity }}
            className="space-y-6"
          >
            {/* Label with micro-interaction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center gap-3 group"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-gradient-to-r from-orange-500 to-red-500"
              />
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-neutral-400 group-hover:text-orange-400 transition-colors duration-300">
                About Us
              </span>
            </motion.div>

            {/* Heading with staggered word reveal */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight text-white">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="block"
              >
                Crafting fresh,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="block"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  hygienic food
                </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="block"
              >
                with passion.
              </motion.span>
            </h2>

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Foodie Spot began with a simple mission — to serve{" "}
              <span className="text-orange-400/80 font-medium">fresh</span>,{" "}
              <span className="text-orange-400/80 font-medium">hygienic</span>, and
              genuinely delicious food to our community. Every dish is prepared
              with care, using only high-quality ingredients.{" "}
              <span className="text-white/80">No shortcuts, no compromises.</span>
            </motion.p>

            {/* Divider with gradient animation */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-px w-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 origin-left"
            />

            {/* Stats with hover micro-interactions */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 25, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.45 + index * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col gap-2 group cursor-default"
                >
                  <Counter value={stat.value} />
                  <span className="text-xs sm:text-sm text-neutral-500 leading-snug group-hover:text-neutral-400 transition-colors duration-300">
                    {stat.label}
                  </span>
                  {/* Subtle underline on hover */}
                  <span className="h-px w-8 bg-neutral-800 group-hover:bg-orange-500/50 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== Right: Image with scroll-driven parallax ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative group"
          >
            {/* Subtle orange glow on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            />

            <motion.div
              style={{ y: smoothImageY }}
              className="relative aspect-[4/3] sm:aspect-[16/11] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
                alt="Chef preparing food in a professional kitchen"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>

            {/* Badge with subtle float animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute -bottom-5 left-6 sm:left-8 bg-[#1a1a1a] border border-neutral-800 rounded-md px-5 py-3.5 flex items-center gap-3 shadow-sm hover:border-orange-500/30 transition-colors duration-300 group/badge"
            >
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-400"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </motion.span>
              <div>
                <div className="text-sm font-medium text-white">Michelin Recommended</div>
                <div className="text-xs text-neutral-500">Since 2015</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;