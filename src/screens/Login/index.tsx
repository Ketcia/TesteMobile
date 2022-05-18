import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";


export default function Login() {
  return (
    <View style={styles.container}>

        <KeyboardAvoidingView>
          <Text style={styles.title}>Login</Text>
          <View style={styles.formRow}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={[styles.formRow,styles.shadowProp]}>
            <Entypo name="key" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Button title="Login" type="vermelho"/>
          <Button title="Cadastre-se"   />
        </KeyboardAvoidingView>

    </View>
  );
}