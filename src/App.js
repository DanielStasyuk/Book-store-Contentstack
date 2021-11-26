import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./GraphQl/apollo";
import Routing from "./Routing";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Routing />
      </ApolloProvider>
    </Router>
  );
};

export default App;
