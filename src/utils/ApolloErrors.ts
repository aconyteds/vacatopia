import { GraphQLError } from "graphql";
import { ApolloServerErrorCode } from "@apollo/server/errors";

export function ApolloError(
  message: string,
  code?: ApolloServerErrorCode
): GraphQLError {
  return new GraphQLError(message, {
    extensions: {
      code: code ?? ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
    },
  });
}
