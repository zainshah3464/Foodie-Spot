"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects with spring smoothing
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 60, damping: 20 });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const smoothTextY = useSpring(textY, { stiffness: 80, damping: 25 });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);

  // Scroll progress line at top
  const progressScaleX = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0d0d0d]"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: smoothBackgroundY }}>
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
          alt="Delicious food"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/85 via-[#0d0d0d]/60 to-[#0d0d0d]/90" />
        {/* Subtle orange tint at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent" />
      </motion.div>

      {/* Scroll progress indicator */}
      <motion.div
        style={{ scaleX: progressScaleX }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-red-600 origin-left z-20"
      />

      {/* Content */}
      <motion.div
        style={{ y: smoothTextY, opacity, scale }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Badge with micro-interaction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 text-neutral-300 px-5 py-2 rounded-full text-sm font-medium backdrop-blur-sm hover:border-orange-500/40 hover:text-orange-300 transition-all duration-300 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            #1 Food Delivery in Town
          </span>
        </motion.div>

        {/* Heading with staggered line reveal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="block text-white"
          >
            Delicious Food,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="block"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-500">
              Delivered Hot & Fresh
            </span>
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-base sm:text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Order directly on WhatsApp —{" "}
          <span className="text-white">No Commission</span>,{" "}
          <span className="text-white">No App Download</span>.
          <br className="hidden md:block" />
          Ghar Bethay Best Khana Order Karein!
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* WhatsApp CTA Button with ripple effect */}
          <motion.a
            href="https://wa.me/923710371689?text=Hello!%20I%20want%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-full transition-all duration-300 shadow-lg shadow-green-900/30 hover:shadow-green-800/40 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              className="w-5 h-5 mr-2 relative z-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
            </svg>
            <span className="relative z-10">Order Now on WhatsApp</span>
          </motion.a>

          {/* Secondary button with border */}
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 text-base sm:text-lg font-semibold text-white bg-white/[0.06] backdrop-blur-sm border border-white/15 hover:border-orange-500/40 hover:bg-white/[0.1] rounded-full transition-all duration-300"
          >
            View Menu
          </motion.a>
        </motion.div>

        {/* Trust badge with avatars and rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-neutral-400"
        >
          <div className="flex items-center">
            {/* Avatar stack */}
            <div className="flex -space-x-2 mr-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#0d0d0d] bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-[9px] font-bold text-white"
                >
                  {["A", "F", "B", "S"][i]}
                </div>
              ))}
            </div>
            {/* Stars */}
            <div className="flex gap-0.5 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-orange-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span>
              <span className="font-semibold text-white">4.9/5</span>{" "}
              <span className="text-neutral-500">(500+ reviews)</span>
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with micro-interaction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 group cursor-pointer"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 group-hover:text-orange-400 transition-colors duration-300">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-6 h-10 border border-neutral-600 group-hover:border-orange-500/50 rounded-full flex justify-center pt-2 transition-colors duration-300"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-2 bg-neutral-400 group-hover:bg-orange-400 rounded-full transition-colors duration-300"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;