import React from "react";
import { AppUI } from "./AppUI";
import { GlobalProvider } from "../Context/index.js";

function App() {
  return (
    <GlobalProvider>
      <AppUI />
    </GlobalProvider>
  );
}

export default App;
