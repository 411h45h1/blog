import React, { useContext } from "react";

import AppState from "./core/context/AppState";

import { NavigationContainer } from "@react-navigation/native";
import Screens from "./Screens";

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </AppState>
  );
};

export default App;
