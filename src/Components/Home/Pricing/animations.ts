import { Variants } from "framer-motion";

// Para la sección del encabezado (título, subtítulo, botones)
export const headerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Para el contenedor de la cuadrícula de tarjetas de precios
export const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Anima cada tarjeta con un pequeño retraso
    },
  },
};

// Para cada tarjeta de precio individual
export const gridItemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};