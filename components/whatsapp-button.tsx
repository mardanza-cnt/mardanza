"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  const [visible, setVisible] = useState(true);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Find the footer element
    footerRef.current = document.querySelector("footer");

    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="https://wa.me/56986279618"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-500 hover:scale-105 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  );
}

