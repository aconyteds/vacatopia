import { AirBnbModule } from "./generated-types";
import { AirBnbService } from "./air-bnb.service";
import { ApolloError } from "../../utils/ApolloErrors";

const resolvers: AirBnbModule.Resolvers = {
  Query: {
    findAirBNBListings: async (_, { input }, { dataSources }) => {
      try {
        const service = new AirBnbService(dataSources.database);
        return await service.getListingData(input);
      } catch (error) {
        console.error(JSON.stringify(error, null, 2));
        throw ApolloError(error);
      }
    },
  },
};

export default resolvers;
