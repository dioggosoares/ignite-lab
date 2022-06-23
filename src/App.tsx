import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"

// IMPORT ROUTER
import { Router } from "./Router"

// IMPORT LIBS
import { client } from "./lib/apollo"

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
