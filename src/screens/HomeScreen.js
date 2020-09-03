import React, { useContext } from "react";

import AppContext from "../../core/context/appContext";
import { Layout, Toggle, Text } from "@ui-kitten/components";

const HomeScreen = () => {
  const state = useContext(AppContext);
  const { themeSwitch } = state;
  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
    themeSwitch();
  };

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Toggle checked={checked} onChange={onCheckedChange} />

      <Text category="h1">HomeScreen</Text>
    </Layout>
  );
};

export default HomeScreen;
