import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, _ingredients, products } from "./constants";
import { Prisma } from "@prisma/client";


const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomNumber(190, 600),
    size,
    pizzaType,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "user@test.ru",
        password: hashSync("1111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "admin",
        email: "admin@test.ru",
        password: hashSync("1111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
        // .map((i) => ({id: i.id})),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
        // .map((i) => ({id: i.id})),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Карбонара",
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/11ee7d61389ab51a8f648a0dba5b1689.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
        // .map((i) => ({id: i.id})),
      },
    },
  });

  const pizza4 = await prisma.product.create({
    data: {
      name: "Баварская",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/019591a2e222794a81731c99f3cc34ec.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 20),
        // .map((i) => ({id: i.id})),
      },
    },
  });

  const pizza5 = await prisma.product.create({
    data: {
      name: "Чилл Грилл",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/019591c69fac7921a27e4ecd8c99f9df.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 20),
        // .map((i) => ({id: i.id})),
      },
    },
  });

  const pizza6 = await prisma.product.create({
    data: {
      name: "Двойной цыпленок",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11ee7d614cbe0530b7234b6d7a6e5f8e.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
        // .map((i) => ({id: i.id})),
      },
    },
  });
  const pizza7 = await prisma.product.create({
    data: {
      name: "Жюльен",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11ee7d6175c10773bfe36e56d48df7e3.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 10),
        // .map((i) => ({id: i.id})),
      },
    },
  });
  const pizza8 = await prisma.product.create({
    data: {
      name: "Гавайская",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11ee7d617e9339cfb185921a343ad8fd.avif",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 20),
        // .map((i) => ({id: i.id})),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza4.id, pizzaType: 2, size: 40 }),


      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza5.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza6.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza6.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: pizza7.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza7.id, pizzaType: 2, size: 40 }),


      generateProductItem({ productId: pizza8.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza8.id, pizzaType: 2, size: 40 }),

      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
      generateProductItem({ productId: 18 }),
      generateProductItem({ productId: 19 }),
      generateProductItem({ productId: 20 }),
      generateProductItem({ productId: 21 }),
      generateProductItem({ productId: 22 }),
      generateProductItem({ productId: 23 }),
      generateProductItem({ productId: 24 }),
      generateProductItem({ productId: 25 }),
      generateProductItem({ productId: 26 }),
      generateProductItem({ productId: 27 }),
      generateProductItem({ productId: 28 }),
      generateProductItem({ productId: 29 }),
      generateProductItem({ productId: 30 }),
      generateProductItem({ productId: 31 }),
      generateProductItem({ productId: 32 }),
      generateProductItem({ productId: 33 }),
      generateProductItem({ productId: 34 }),
      generateProductItem({ productId: 35 }),
      generateProductItem({ productId: 36 }),
      generateProductItem({ productId: 37 }),
      generateProductItem({ productId: 38 }),
      generateProductItem({ productId: 39 }),
      generateProductItem({ productId: 40 }),
    ],
  });

   await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '22222',
      },
    ],
   });

   await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
              connect: [ {id: 1}, {id: 2}, {id: 3}, {id: 4}],
            },
          },
   });
   await prisma.story.createMany({
     data: [
       {
         previewImageUrl:
           'https://cdn.inappstory.ru/story/oyl/xrr/tt0/9asfwogtotjkt2e2lorjuu9/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=1079401124',
       },
       {
         previewImageUrl:
           'https://cdn.inappstory.ru/story/hgo/uei/szi/giwk1rgfggaoont25wrc9zu/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=2250219681',
       },
       {
         previewImageUrl:
           'https://cdn.inappstory.ru/story/tx5/by7/w9t/ooaoo8ymussqnsbu1tnysky/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=2809026799',
       },
       {
         previewImageUrl:
           'https://cdn.inappstory.ru/story/pti/jga/d9j/fq9upd4i3vbemjhpdtt8qtw/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=1339936796',
       },
       {
         previewImageUrl:
           'https://cdn.inappstory.ru/story/zj8/f0f/ogu/x4jnqqfmxzfpuiuteli0oey/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=2063215773',
       },
       {
         previewImageUrl:
           'https://cdn.inappstory.ru/story/ygm/rpv/ecb/yrdfwihk7kflzania2f70hu/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAEAQ&v=1843016496',
       },
     ],
   });
   
   await prisma.storyItem.createMany({
     data: [
       {
         storyId: 1,
         sourceUrl:
           'https://cdn.inappstory.ru/file/p0/kz/vc/g4hy4ijqr2wpf3jqclgcqkrn30.webp?k=IgAAAAAAAAAEAQ',
       },
       {
         storyId: 1,
         sourceUrl:
           'https://cdn.inappstory.ru/file/rh/hz/qk/wa7pok3fm6uoepizwndimpncgj.webp?k=IgAAAAAAAAAEAQ',
       },
       {
         storyId: 1,
         sourceUrl:
           'https://cdn.inappstory.ru/file/c9/9j/mq/jgsi9uagwk4zvwqsfayepyv0u0.webp?k=IgAAAAAAAAAEAQ',
       },
       {
         storyId: 1,
         sourceUrl:
           'https://cdn.inappstory.ru/file/z2/ml/0a/djxj9jvwtlevinrnoy8pfyisyp.webp?k=IgAAAAAAAAAEAQ',
       },
       {
         storyId: 1,
         sourceUrl:
           'https://cdn.inappstory.ru/file/tx/o2/lg/mki7dgrfa1gqsmr6nddbehqyl6.webp?k=IgAAAAAAAAAEAQ',
       },
     ],
   });
}



async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
