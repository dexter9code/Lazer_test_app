import React from "react";
import { View, Alert, StyleSheet, StatusBar, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import Button from "../components/Button";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
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
