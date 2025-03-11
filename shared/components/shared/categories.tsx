"use client";

import { cn } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/category";
import { Category } from "@prisma/client";


interface IProps {
  items: Category[];
    className?: string;
}

// const cats = [
//   {id: 1, name: 'Пиццы'},
//   {id: 2, name: 'Комбо'},
//   {id: 3, name: 'Закуски'},
//   {id: 4, name: 'Коктейли'},
//   {id: 5, name: 'Кофе'},
//   {id: 6, name: 'Напитки'},
//   {id: 7, name: 'Десерты'},
//   {id: 8, name: 'Завтраки'},
// ];
// const activeIndex = 0;

export const Categories: React.FC<IProps> = ({items, className }) => {
   const categoryActiveId =  useCategoryStore((state) => state.activeId)  
console.log(items);

    return (
        <div className={cn("inline-flex gap-1 bg-gray-50   p-1 rounded-2xl", className)}>
            {items.map(({name, id}, idx) => (
        <a
          key={idx}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${name}`}
          >
          <button>{name}</button> 
        </a>
      ))}
        </div>
    )
}