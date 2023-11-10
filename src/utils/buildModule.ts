import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { join } from "path";
import { readFileSync } from "fs";
import { Resolvers, gql } from "graphql-modules";
import { printSchema, parse } from "graphql";
import {
  GraphQLResolverMap,
  GraphQLSchemaModule,
} from "@apollo/subgraph/dist/schema-helper/resolverMap";

export const buildModule = (
  file: string,
  resolver: Resolvers
): GraphQLSchemaModule => {
  const schema = gql(file);

  const module: GraphQLSchemaModule = {
    typeDefs: schema,
    resolvers: resolver as GraphQLResolverMap,
  };

  return module;
};
