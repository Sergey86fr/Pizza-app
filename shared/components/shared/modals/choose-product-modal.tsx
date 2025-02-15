"use client"
import { Dialog } from "@/shared/components/ui";
import { DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "..";
import { ProductWithRelation } from "@/@types/prisma";
import { ChoosePizzaForm } from "../choose-pizza-form";





interface IProps {
    product: ProductWithRelation;
    className?: string;
}

export const ChooseProductModal: FC<IProps> = ({product, className}) => {
    const router = useRouter();
    const isPizzaForm = Boolean(product.items[0]?.pizzaType);

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn("p-0 min-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)}>
                   {/* <Title text={product.name} /> */}
                   {
                    isPizzaForm ? (
                        <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients} items={product.items} />
                        
                    ) : (

                        <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
                    )
                   }
            </DialogContent>
        </Dialog>
    )
}