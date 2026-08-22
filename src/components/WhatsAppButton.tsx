"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { EASE } from "./ui/Motion";

/** Floating WhatsApp entry point, revealed once the visitor starts scrolling. */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.85, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: reduce ? 1 : 0.85, y: reduce ? 0 : 12 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
          style={{
            paddingBottom: "env(safe-area-inset-bottom)",
            paddingRight: "env(safe-area-inset-right)",
          }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative grid size-14 place-items-center rounded-full bg-[#0b1220] text-white shadow-[0_14px_38px_-12px_rgba(11,18,32,0.75)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:bg-[#111827] active:scale-95 sm:size-[3.75rem]"
          >
            {/* Gold ring */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-full border border-[#c9a227]/40 transition-colors duration-400 group-hover:border-[#c9a227]"
            />
            {/* Quiet pulse — CSS-driven, hidden outright under reduced motion */}
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full border border-[#c9a227]/30 [animation-duration:2.8s] motion-reduce:hidden"
            />

            <MessageCircle
              aria-hidden
              className="relative size-6 text-[#e5c766] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />

            {/* Tooltip — pointer devices only */}
            <span
              aria-hidden
              className="pointer-events-none absolute right-[calc(100%+0.875rem)] top-1/2 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-lg bg-[#0b1220] px-3.5 py-2 text-[0.75rem] font-medium text-white opacity-0 shadow-lg transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100 lg:block"
            >
              Chat on WhatsApp
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#0b1220]" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
