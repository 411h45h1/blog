import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import {
  Settings,
  LoginScreen,
  RegisterScreen,
  AuthLoadingScreen,
  OnBoard,
  HomeScreen,
  BlogSelected,
} from "../src/screens";
import AppContext from "./context/appContext";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";

const Stack = createStackNavigator();

const Screens = () => {
  const state = useContext(AppContext);

  return (
    <ApplicationProvider
      {...eva}
      theme={state.lightTheme ? eva.light : eva.dark}
    >
      <IconRegistry icons={EvaIconsPack} />

      <Stack.Navigator initialRouteName="AuthLoadingScreen">
        <Stack.Screen
          name="InitialRoute"
          component={AuthLoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoard"
          component={OnBoard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BlogSelected"
          component={BlogSelected}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
        name="Podcast"
        component={Podcast}
        options={{ headerShown: false, gestureEnabled: false }}
      /> */}
      </Stack.Navigator>
    </ApplicationProvider>
  );
};

export default Screens;
