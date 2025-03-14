import { FC } from "react";
import { WhiteBlock } from "../white-block";
import { CheckoutItem } from "../checkout-item";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { getCartItemDetails } from "@/shared/lib";
import { CartStateItem } from "@/shared/lib/get-cart-details";
import { CheckoutItemSkeleton } from "../checkout-item-skeleton";

interface Props {
  className?: string;
  items: CartStateItem[];
  loading?: boolean;
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  removeCartItem: (id: number) => void;
}

export const CheckoutCart: FC<Props> = ({
  className,
  items,
  loading,
  onClickCountButton,
  removeCartItem,
}) => {
  return (
    <WhiteBlock title="1. Корзина" className={className}>
      <div className="flex flex-col gap-5">
        {loading
          ? [...Array(4)].map((_, index) => (
              <CheckoutItemSkeleton key={index} />
            ))
          : items.map((item) => (
              <CheckoutItem
                key={item.id}
                id={1}
                imageUrl={item.imageUrl}
                details={getCartItemDetails(
                  item.ingredients,
                  item.pizzaType as PizzaType,
                  item.pizzaSize as PizzaSize
                )}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                disabled={item.disabled}
                onClickCountButton={(type) =>
                  onClickCountButton(item.id, item.quantity, type)
                }
                onClickRemove={() => removeCartItem(item.id)}
              />
            ))}
      </div>
    </WhiteBlock>
  );
};
