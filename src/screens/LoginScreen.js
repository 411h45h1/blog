import React, { useState } from "react";
import { Layout, Button, Spinner, Icon, Text } from "@ui-kitten/components";

import TextInput from "../components/TextInput";
import { emailValidator, passwordValidator } from "../../core/utils";
import { loginUser } from "../api/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [setError] = useState("");

  const handleLogin = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
    }

    setLoading(true);

    const response = await loginUser({
      email: email.value,
      password: password.value,
    });

    if (response.error) {
      setError(response.error);
      setLoading(false);
    }
  };

  return (
    <Layout
      style={{
        flex: 8,
      }}
    >
      <Layout
        style={{
          flex: 1,
          alignItems: "flex-start",
        }}
      >
        <Button
          onPress={() => navigation.navigate("OnBoard")}
          status="control"
          style={{
            margin: 20,
          }}
        >
          Return
        </Button>
      </Layout>

      <Layout
        style={{
          flex: 7,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
          autoCapitalize="none"
        />

        <Button
          size="medium"
          onPress={() => handleLogin()}
          accessoryLeft={() => (loading ? <Spinner status="control" /> : null)}
        >
          Login
        </Button>
      </Layout>
    </Layout>
  );
};

export default LoginScreen;
