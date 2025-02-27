import {  Container, ProductForm } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {

  const product = await prisma.product.findFirst({ where: { id: Number(id) },
include: {
  ingredients: true,
  category: {
    include: {
      products: {
        include: {
          items: true,
        },
      },
    },
  },
  items: true,
},
});


  

// const [addCartItem, loading] = userCartStore((state) => [state.addCartItem, state.loading]);

  if (!product) {
    return notFound();
  }

  //  const firstItem = product.items[0];
  //    const isPizzaForm = Boolean(firstItem?.pizzaType);


    //  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    //   try {
  
    //       const itemId = productItemId ?? firstItem.id;
          
          
    //          await addCartItem({
    //           productItemId: itemId,
    //           ingredients,
    //          });
          
      
    //       toast.success(product.name +  "добавлен в корзину");
        
  
    //   } catch (err) {
    //       toast.error("Не удалось добавить товар в корзину");
    //     console.log(err);
    //   }
    
    // }



  return (
    <Container className="flex flex-col my-10">
  <ProductForm product={product} />


{/* {isPizzaForm ? (
          // <ChoosePizzaForm
          //   imageUrl={product.imageUrl}
          //   name={product.name}
          //   ingredients={product.ingredients}
          //   items={product.items}
          //   onSubmit={onSubmit}
          //   loading={loading}
          // />
        ) : (
          // <ChooseProductForm
          //   imageUrl={product.imageUrl}
          //   name={product.name}
          //   price={firstItem.price}
          //   onSubmit={onSubmit}
          //   loading={loading}
          // />
        )} */}

      {/* <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={40} />
        <div className="w-[490px] bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            sequi?
          </p>
          <GroupVariants
            items={[
              {
                name: "Маленькая",
                value: "1",
              },
              {
                name: "Средняя",
                value: "2",
              },
              {
                name: "Большая",
                value: "3",
              },
            ]}
          />
        </div>
      </div> */}
    </Container>
  );
}
