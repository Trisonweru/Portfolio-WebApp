import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://weru-portfolio-backend.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
