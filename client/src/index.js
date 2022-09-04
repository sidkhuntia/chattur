import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import { AuthProvider } from "./auth/Authentication"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById("root")
)
