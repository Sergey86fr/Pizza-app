"use client";

import { Input } from "../ui";
import { CheckboxFilterGroup } from "./checkbox-filters-group";
import { RangeSlider } from "./range-slider";
import { Title } from "./title";
import { useIngredients, useFilters, useQueryFilters } from "@/shared/hooks";



interface IProps {
  className?: string;
}

// interface IPriceProps {
//   priceFrom?: number;
//   priceTo?: number;
// }

// interface IQueryFiltersProps extends IPriceProps {
//   pizzaTypes: string;
//   sizes: string;
//   ingredients: string;
// }

export const Filter: React.FC<IProps> = ({ className }) => {
 
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();


  useQueryFilters(filters);
  // const searchParams = useSearchParams() as unknown as Map<
  //   keyof IQueryFiltersProps,
  //   string
  // >;
  // const router = useRouter();

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));



  const updatePrices = (prices: number[]) => {
    filters.setPrices( 'priceFrom', prices[0] );
    filters.setPrices( 'priceTo', prices[1] );
  }
 
  

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* <div className="flex flex-col gap-4">
        <FilterCheckbox name="set" text="Можно собирать" value="1" />
        <FilterCheckbox name="new" text="Новинки" value="2" />
      </div> */}

      <CheckboxFilterGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />
      <CheckboxFilterGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          onValueChange={updatePrices}
        />
      </div>
      <CheckboxFilterGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
        items={
          items
        }
          //   [
          //   {
          //     text: 'Сырный соус',
          //     value: '1',
          //   },
          //   {
          //     text: 'Моццарелла',
          //     value: '2',
          //   },
          //   {
          //     text: 'Чеснок',
          //     value: '3',
          //   },
          //   {
          //     text: 'Солённые огурчики',
          //     value: '4',
          //   },
          //   {
          //     text: 'Красный лук',
          //     value: '5',
          //   },
          //   {
          //     text: 'Томаты',
          //     value: '6',
          //   },
          //   {
          //     text: 'Сырный соус',
          //     value: '1',
          //   },
          //   {
          //     text: 'Моццарелла',
          //     value: '2',
          //   },
          //   {
          //     text: 'Чеснок',
          //     value: '3',
          //   },
          //   {
          //     text: 'Солённые огурчики',
          //     value: '4',
          //   },
          //   {
          //     text: 'Красный лук',
          //     value: '5',
          //   },
          //   {
          //     text: 'Томаты',
          //     value: '6',
          //   },
          // ]
      />
    </div>
  );
};
