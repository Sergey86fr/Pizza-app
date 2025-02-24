"use client"

import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import { ProductCard } from ".";
import { useIntersection } from "react-use"
import  { useEffect, useRef } from "react";
import { useCategoryStore } from "@/shared/store/category";
import { ProductWithRelation } from "@/@types/prisma";


//этот пропс сделал сам пока временно
// interface IItemProps {
//     key: string;
//     id: number;
//     name: string;
//     imageUrl: string;
//     price: number
// }

    // id: number;
    // price: number;
    // size: number | null;
    // pizzaType: number | null;
    // productId: number;

interface IProps {
    title: string;
    items: ProductWithRelation[];
    categoryId: number;
    className?: string;
    listClassName?: string;

   
}

export const ProductsGroupList: React.FC<IProps> = ({
    title,
    items,
    categoryId,
    className,
    listClassName,

}) => {

    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    useEffect(() => {
        if(intersection?.isIntersecting) {
            setActiveCategoryId(categoryId); 
        }
    },[categoryId, intersection?.isIntersecting, title]);


    return <div className={className} id={title} ref={intersectionRef}>
          <Title text={title} size="lg" className="font-extrabold mb-5" />
          <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
            {items.map((product, i) => (
                <ProductCard
                  key={product.id}
                  id= {product.id}
                  name= {product.name}
                  imageUrl={product.imageUrl}
                  price={product.items[0].price}
                  ingredients={product.ingredients}
                //   price={product.items[0].price}
                />
            ))}

          </div>
    </div>
}