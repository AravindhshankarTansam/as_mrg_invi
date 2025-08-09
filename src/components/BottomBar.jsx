// src/components/bottom-bar/BottomBar.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  CalendarHeart,
  MapPin,
  Gift,
  MessageCircleHeart
} from 'lucide-react';
import { cn } from "@/lib/utils";

const menuItems = [
  { key: 'home', icon: Home, label: 'HOME', href: '#home' },
  { key: 'event', icon: CalendarHeart, label: 'EVENT', href: '#event' },
  { key: 'location', icon: MapPin, label: 'LOCATION', href: '#location' },
  // { key: 'gifts', icon: Gift, label: 'HADIAH', href: '#gifts' },
  { key: 'wishes', icon: MessageCircleHeart, label: 'WISHES', href: '#wishes' },
];

const BottomBar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // 50% of section visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const matchedItem = menuItems.find(item => item.href === `#${id}`);
          if (matchedItem) {
            setActive(matchedItem.key);
          }
        }
      });
    }, observerOptions);

    // Observe each section
    menuItems.forEach(item => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 transform -translate-x-1/2 z-50 w-full px-4 max-w-[430px]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="backdrop-blur-md bg-white/90 border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] px-4 py-2">
        <nav className="flex justify-between items-center">
          {menuItems.map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-200",
                "hover:bg-gray-50/80",
                active === item.key
                  ? "text-primary bg-primary/5"
                  : "text-gray-600"
              )}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(item.key)}
            >
              <item.icon
                className={cn(
                  "h-[18px] w-[18px] sm:h-5 sm:w-5 mb-0.5 sm:mb-1 transition-colors duration-200",
                  active === item.key
                    ? "stroke-rose-500"
                    : "stroke-gray-600"
                )}
              />
              <span
                className={cn(
                  "text-[10px] sm:text-xs font-medium transition-all duration-200 line-clamp-1",
                  active === item.key
                    ? "scale-105 text-rose-500"
                    : "scale-100"
                )}
              >
                {item.label}
              </span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default BottomBar;
