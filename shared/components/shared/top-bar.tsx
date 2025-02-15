import { cn } from "@/shared/lib/utils";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Category } from "@prisma/client";

interface IProps {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<IProps> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-2 shadow-md shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
