import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import AppState from "./core/context/AppState";

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">HOME</Text>
  </Layout>
);

export default function App() {
  return (
    <AppState>
      <ApplicationProvider {...eva} theme={eva.light}>
        <HomeScreen />
      </ApplicationProvider>
    </AppState>
  );
}
