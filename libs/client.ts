import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const link = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql", // Replace with your actual GraphQL API URL
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;
