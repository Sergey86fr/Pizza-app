import { FC } from "react";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const CheckoutItemSkeleton: FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex item-center justify-between', className)}>
      <div className={cn('flex item-center gap-5')}>
        <div className={cn('w-[50px] h-[50px] bg-gray-200 rounded-full animate-pulse')} />
        <h2 className={cn('w-40 h-5 bg-gray-200 rounded animate-pulse')} />
      </div>
      <div className={cn('h-5 w-10 bg-gray-200 rounded animate-pulse')} />
      <div className={cn('h-8 w-[133px] bg-gray-200 rounded animate-pulse')} />
    </div>
  );
};
