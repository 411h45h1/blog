import React, { useState } from "react";
import { Layout, Button, Spinner, Icon, Text } from "@ui-kitten/components";
import { CommonActions } from "@react-navigation/native";
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
        <Icon
          style={{
            marginTop: 30,
            marginLeft: 10,
            width: 32,
            height: 32,
          }}
          fill="#8F9BB3"
          name="arrow-back"
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        />
      </Layout>

      <Layout
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text category="h1" style={{ fontSize: 120 }}>
          Blog.
        </Text>
      </Layout>

      <Layout
        style={{
          flex: 6,
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
          status="basic"
          size="medium"
          onPress={() => handleLogin()}
          accessoryLeft={() => (loading ? <Spinner /> : null)}
        >
          Login
        </Button>
      </Layout>
    </Layout>
  );
};

export default LoginScreen;
