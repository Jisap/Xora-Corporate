import { Variants } from "framer-motion";

// Para el encabezado principal
export const headerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Para el contenedor principal de la cuadrícula (blog-wrapper)
export const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Anima la columna izquierda y la derecha con un retraso
    },
  },
};

// Para los elementos directos de la cuadrícula (la tarjeta grande y el contenedor de las pequeñas)
export const gridItemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};