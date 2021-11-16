import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
  } from "@apollo/client";
  import { onError } from "@apollo/client/link/error";
  
  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) =>
        alert(`GraphQL error ${message}`)
      );
    }
  });
  
  const link = from([
    errorLink,
    new HttpLink({
      uri: process.env.REACT_APP_URL,
      headers: {
        api_key: process.env.REACT_AP_API_KEY,
        access_token: process.env.REACT_APP_DELIVERY_TOKEN,
        environment: process.env.REACT_APP_ENVIRONMENT,
        region: "eu" ? "eu" : "us",
      },
    }),
  ]);
  export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });