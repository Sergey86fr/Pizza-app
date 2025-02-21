import { Cart, CartItem, Product, ProductItem, Ingredient } from "@prisma/client"

export type CartItemDTO = CartItem & {
    productItem: ProductItem & {
        product: Product;
    };
    ingredients: Ingredient[];
};

export interface CartDTO extends Cart {
items: CartItemDTO[];
}