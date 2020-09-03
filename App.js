import React from "react";

import AppState from "./core/context/AppState";

import { NavigationContainer } from "@react-navigation/native";
import Screens from "./core/Screens";

import "./fixtimerbug.js";

const App = () => (
  <AppState>
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  </AppState>
);

export default App;
