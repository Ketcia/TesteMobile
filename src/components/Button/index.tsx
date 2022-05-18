import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";
import styles from "./styles"

export default function Button({ onPress, type, title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={type=="vermelho" 
        ? styles.buttonVermelho
        : styles.buttonAzul
    } onPress={onPress} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}