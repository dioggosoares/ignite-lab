import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

// IMPORT ROUTER
import { Router } from "./Router"

// IMPORT LIBS
import { client } from "./lib/apollo"

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
        <ToastContainer
          progressClassName="toastProgress"
          bodyClassName="toastBody"
          closeButton={false}
          position="top-left"
        />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
