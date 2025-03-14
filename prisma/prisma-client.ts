import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;


// const globalForPrisma = global as unknown as { prisma?: PrismaClient };

// export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
