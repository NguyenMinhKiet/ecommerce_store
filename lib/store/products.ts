import {
  generateBagsProducts,
  generateClothingProducts,
  generateSandalsProducts,
  generateSneakerProducts,
  generateSunglassesProducts,
} from "./generate-products";

export const SNEAKER_PRODUCTS = generateSneakerProducts();
export const SUNGLASSES_PRODUCTS = generateSunglassesProducts();
export const SANDALS_PRODUCTS = generateSandalsProducts();
export const CLOTHING_PRODUCTS = generateClothingProducts();
export const BAGS_PRODUCTS = generateBagsProducts();
