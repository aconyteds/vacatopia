# VACATOPIA GraphQL Service

This is a NodeJS Based GraphQL Service. It is intended to be available as a Subgraph for a Federated supergraph system. It's purpose is to access Vacation Listing data to provide details about the listings. It is configured to use Prisma to connect to a Mongo Database that has been configured locally.

## Getting Started

1. Clone the Repo
2. Run `npm ci` which will install the latest version of the libray and do the necessary code generation activities

### Pre-requisites

You need to have a MongoDB instance configured locally. Ensure you have a `.env` file in the root of your project with the database [connection string](https://www.prisma.io/docs/concepts/database-connectors/mongodb) properly configured:

```
DATABASE_URL="mongodb://{username}:{password}@localhost:27017/listings"
```

See the linked documentation for more information about requirements for Database configuration (replica sets).

## Development

To start the application in dev mode, run `npm start:dev`. The server starts at [http://localhost:4000/graphql](http://localhost:4000/graphql) by default. Launch this in your browser, or connect using a tool like [insomnia](https://insomnia.rest/download).

### Example Queries

Here are some example queries you can use to get started.

#### Health Check

This should always work so long as your server started properly. It will return `true`.

```graphql
{
  healthCheck
}
```

#### Find Listing Data

This query can be used to find listing data in your system once it is populated.

```graphql
query FindListingData($input: FindAirBNBListingsInput!)
    findAirBNBListings(input: $input) {
        hostId
        name
        location {
        latitude
        longitude
        }
    }
}
```

This is just a sample input. You can leave the input blank if you like (empty `{}`).

```json
{
  "input": {
    "hostId": ["46498"]
  }
}
```
