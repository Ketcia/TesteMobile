import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput
} from "react-native";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import Button from "../../components/Button";
import styles from "./styles";


export default function Cadastrar() {

  async function handleCadastrar() {
    console.log('Cadastrado');
  }

  async function handleVoltar() {
      console.log("Voltar");
  }

  return (
    <View style={styles.container}>

        <KeyboardAvoidingView>
          <Text style={styles.title}>Cadastre-se</Text>
          <View style={styles.formRow}>
            <Ionicons name='person' style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.formRow}>
            <MaterialIcons name='email' style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.formRow}>
            <Entypo name='key' style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Button title="Salvar" type="blue" onPress={handleCadastrar} />
          <Button title="Voltar" type='red' onPress={handleVoltar} />
        </KeyboardAvoidingView>

    </View>
  );
}