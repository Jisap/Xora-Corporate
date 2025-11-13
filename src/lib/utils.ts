export const createSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/&/g, 'and') // reemplaza símbolos comunes
    .replace(/\s+/g, '-') // espacios por guiones
    .replace(/[^\w-]+/g, '') // elimina caracteres no alfanuméricos
    .trim();
