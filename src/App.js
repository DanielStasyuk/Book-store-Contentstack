import "./App.css";
import Home from "./pages/home";
import { ApolloProvider } from "@apollo/client";
import { client } from "./GraphQl/apollo";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
