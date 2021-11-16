import { ApolloProvider } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import { client } from "../GraphQl/apollo";
import Home from "./home";

it("Shows loading", () => {
  render(
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

it("Shows SearchBox after loading", async () => {
  render(
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );

  expect(
    await screen.findByPlaceholderText("Search books")
  ).toBeInTheDocument();
});
