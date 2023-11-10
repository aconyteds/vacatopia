import { startStandaloneServer } from "@apollo/server/standalone";
import { Context, buildServer } from "./graphql/graphql";
import prisma from "./data/Database/client";

async function startServer() {
  const server = await buildServer();

  const { url } = await startStandaloneServer<Context>(server, {
    context: async () => ({
      dataSources: {
        database: prisma,
      },
    }),
  });
  console.log(`Server ready at ${url}`);
}

startServer();
