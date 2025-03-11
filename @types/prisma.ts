import { Ingredient, Product, ProductItem } from "@prisma/client";


export type ProductWithRelation = Product & { items: ProductItem[]; ingredients: Ingredient[]};

