import {
  Container,
  Filter,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";


export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });
 
  

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)}/>
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filter />
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

// 10/25