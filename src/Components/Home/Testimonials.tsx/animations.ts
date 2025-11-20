import { Variants } from "framer-motion";

// Animación para la columna izquierda (imagen)
export const leftColumnVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animación para la columna derecha (swiper)
export const rightColumnVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }, // Pequeño retraso para que aparezca después de la izquierda
};