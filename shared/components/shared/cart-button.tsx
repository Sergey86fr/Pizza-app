"use client";

import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "../ui";
import { FC } from "react";
import { cn } from "@/shared/lib/utils";
import { CartDrawer } from "./cart-drawer";
import { userCartStore } from "@/shared/store";

interface IProps {
  className?: string;
}

export const CartButton: FC<IProps> = ({ className }) => {
 

  const [totalAmount, items, loading] = userCartStore(state => [state.totalAmount, state.items, state.loading]);
  
  return (
    // поискать проблему в cartDrawer
    <CartDrawer>
      <Button loading={loading} className={cn("group relative",{"w-[105px]": loading}, className)}>
        <b>{totalAmount} ₽</b>
        <span className="h-full w-[1px] bg-white/30 mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="h-4 w-4 relative" strokeWidth={2} />
          <b>{items.length}</b>
        </div>
        <ArrowRight size={20} className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
      </Button>
    </CartDrawer>
  );
};
