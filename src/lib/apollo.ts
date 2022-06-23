import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

// const defaultOptions: DefaultOptions = {
//   watchQuery: {
//     fetchPolicy: 'no-cache',
//     errorPolicy: 'ignore',
//   },
//   query: {
//     fetchPolicy: 'no-cache',
//     errorPolicy: 'ignore',
//   }
// }

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o3t2wu0e6x01xx9ktm0wx8/master",
  cache: new InMemoryCache(),
});