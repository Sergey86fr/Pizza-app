import { cn } from "@/shared/lib/utils";
import { FC } from "react";
import { Title } from "./title";
import { Button } from "../ui";

interface IChooseProductProps {
  imageUrl: string;
  name: string;
  loading?: boolean;
  price: number;
  className?: string;
  onSubmit?: VoidFunction;
}

export const ChooseProductForm: FC<IChooseProductProps> = ({
  className,
  name,
  loading,
  price,
  imageUrl,
  onSubmit,
}) => {
  // const textDetails = '30 см, традиционное тесто 30';
  // const totalPrice = 350;
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        {/* <p className="text-gray-400">{textDetails}</p> */}

        <Button
        loading={loading}
          onClick={() => onSubmit?.()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавть в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
