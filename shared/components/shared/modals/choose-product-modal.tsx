"use client";
import { Dialog } from "@/shared/components/ui";
import { DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { FC } from "react";
import { useRouter } from "next/navigation";
import {  ProductForm } from "..";
import { ProductWithRelation } from "@/@types/prisma";
// import { userCartStore } from "@/shared/store";
// import toast from "react-hot-toast";

interface IProps {
  product: ProductWithRelation;
  className?: string;
}

export const ChooseProductModal: FC<IProps> = ({ product, className }) => {
  const router = useRouter();
  // const firstItem = product.items[0];
  // const isPizzaForm = Boolean(firstItem?.pizzaType);
  // const [addCartItem, loading] = userCartStore((state) => [state.addCartItem, state.loading]);

//   const onAddProduct = () => {
//     addCartItem({
//       productItemId: firstItem.id,
//     });
//   };

//   const onAddPizza = async (productItemId: number, ingredients: number[]) => {
//     try {
//       await addCartItem({
//         productItemId,
//         ingredients,
//       });
  
//   };

  // const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
  //   try {

  //       const itemId = productItemId ?? firstItem.id;
        
        
  //          await addCartItem({
  //           productItemId: itemId,
  //           ingredients,
  //          });
        
    
  //       toast.success(product.name +  "добавлен в корзину");
  //     router.back();

  //   } catch (err) {
  //       toast.error("Не удалось добавить товар в корзину");
  //     console.log(err);
  //   }
  
  // }

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 min-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >

        <ProductForm product={product} onSubmit={() => router.back()} />
        {/* <Title text={product.name} /> */}
        {/* {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            price={firstItem.price}
            onSubmit={onSubmit}
            loading={loading}
          />
        )} */}
      </DialogContent>
    </Dialog>
  );
};
