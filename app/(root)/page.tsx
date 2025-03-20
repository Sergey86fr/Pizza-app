import {
  Container,
  Filter,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components/shared";
import { findPizzas, GetSearchParams } from "@/shared/lib/find-pizzas";
import { Suspense } from "react";


export default async function Home({searchParams}: {searchParams: GetSearchParams}) {
  const categories = await findPizzas(searchParams);

  // console.log("asd",categories);
  
 

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      {/* <TopBar categories={categories.filter((category) => category.products.length > 0)}/> */}
      <TopBar categories={categories.filter((category) => category)}/>
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Suspense>
            <Filter />
            </Suspense>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {
                categories.map((category) => (
                  category.products.length > 0 && (
                    <ProductsGroupList 
                    key={category.id}
                    title={category.name}
                    categoryId={category.id}
                    items={category.products}
                    />
                  )
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

// 20/24