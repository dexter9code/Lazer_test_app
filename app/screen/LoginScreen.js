import React, { useState } from "react";
import { View, Alert, StyleSheet, StatusBar, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button";
import authApi from "../api/auth";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = ({ email, password }) => {
    const result = authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);

    const user = jwtDecode(result.data);
    console.log(user);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrent={false}
              icon="email"
              placeholder="Email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              contentType="email"
            />
            <ErrorMessage
              error="invalid email or password"
              visible={loginFailed}
            />
            {touched.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}

            <AppTextInput
              autoCapitalize="none"
              autoCorrent={false}
              icon="lock"
              secureTextEntry
              placeholder="Password"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              contentType="password"
            />
            {touched.password && (
              <Text style={{ color: "red" }}>{errors.password}</Text>
            )}
            <Button title="login" submit={handleSubmit} width="75%" />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
});

export default LoginScreen;
