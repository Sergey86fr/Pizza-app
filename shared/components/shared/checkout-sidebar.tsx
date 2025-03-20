import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { CheckoutItemDetails, WhiteBlock } from ".";
import { Button, Skeleton } from "../ui";
import { FC } from "react";
import { cn } from "../../lib/utils";

const VAT = 15;
const DELIVERY_PRICE = 250;


interface Props {
  className?: string;
  loading?: boolean;
  submitting?: boolean;
  totalAmount: number;
}

export const CheckoutSidebar: FC<Props> = ({ totalAmount, loading, submitting, className }) => {
  const vatPrice = (totalAmount * VAT) / 100;
    const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

  return (
    <WhiteBlock className={cn('p-6 sticky top-4', className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого</span>
        {
          loading ? <Skeleton className="w-full h-11" /> : <span className="h-11 text-[34px] font-extrabold">{totalPrice} ₽</span>
        }
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={20} className="mr-2 text-gray-300" />
            Стоимость товаров:
          </div>
        }
        value={ loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${totalAmount} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={20} className="mr-2 text-gray-300" />
            Налоги:
          </div>
        }
        value={ loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${vatPrice} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={20} className="mr-2 text-gray-300" />
            Доставка:
          </div>
        }
        value={ loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${DELIVERY_PRICE} ₽`}
      />

      <Button
      loading={loading || submitting}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
