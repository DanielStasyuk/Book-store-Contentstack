import { ApolloProvider } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import { client } from "../GraphQl/apollo";
import Home from "./home";
import { BrowserRouter as Router } from "react-router-dom";

it("Shows SearchBox after loading", async () => {
  render(
    <Router>
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </Router>
  );

  expect(
    await screen.findByPlaceholderText("Search book...")
  ).toBeInTheDocument();
});
