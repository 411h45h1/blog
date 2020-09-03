import React from "react";

import AppState from "./core/context/AppState";

import { NavigationContainer } from "@react-navigation/native";
import Screens from "./core/Screens";

const App = () => (
  <AppState>
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  </AppState>
);

export default App;
