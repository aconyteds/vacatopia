import { GraphQLResolverMap } from "@apollo/subgraph/dist/schema-helper";
import { _InfoModule } from "./generated-types";

const resolvers: _InfoModule.Resolvers = {
  Query: {
    healthCheck: () => true,
  },
};

export default resolvers;
