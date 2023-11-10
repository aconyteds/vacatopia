import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { join } from "path";
import { readFileSync } from "fs";
import { buildModule } from "../utils/buildModule";
import { PrismaClient } from "@prisma/client";
import Modules from "../modules";

export interface Context {
  dataSources: {
    database: PrismaClient;
  };
}

export const buildServer = async () => {
  const baseModule = buildModule(
    readFileSync(join(__dirname, "./base-schema.graphqls"), "utf-8"),
    {}
  );
  const server = new ApolloServer<Context>({
    schema: buildSubgraphSchema([baseModule, ...Modules]),
  });
  return server;
};
