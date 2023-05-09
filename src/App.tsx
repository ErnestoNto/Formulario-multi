import React from "react";
import RoutesApp from "./Routes";
import { FormProvider } from "./Context/FormContext";

const App = () => {
  return (
    <FormProvider>
      <RoutesApp />
    </FormProvider>
  );
};

export default App;
