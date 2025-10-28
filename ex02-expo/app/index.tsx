import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Linking,
} from "react-native";
import { Text, Button, TextInput } from "react-native-paper";

export default function Index() {
  const router = useRouter();
  const [idade, onChangeIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const anoNasc = new Date().getFullYear() - parseInt(idade);

  return (
    <ScrollView
      style={{ backgroundColor: "beige" }}
      contentContainerStyle={styles.container}
    >
      <Text variant="displaySmall" style={styles.title}>
        Olá Turma!
      </Text>

      <Image
        style={styles.avatar}
        source={require("@/assets/images/avatar.jpg")}
        resizeMode="cover"
      />

      <Pressable onPress={() => setShowDetails(!showDetails)}>
        <Text
          variant="bodyLarge"
          style={styles.text}
          numberOfLines={showDetails ? 0 : 1}
        >
          Este é um App de exemplo da disciplina Programação Web e Mobile do
          Curso de Ciência da Computação da Universidade Católica de Pernambuco
          (semestre 2025.2)
        </Text>
      </Pressable>

      {!isNaN(anoNasc) && (
        <Text variant="bodyLarge" style={{ marginTop: 10 }}>
          Você nasceu em {anoNasc}
        </Text>
      )}

      <TextInput
        label="Qual a sua idade?"
        value={idade}
        onChangeText={onChangeIdade}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          onPress={() => Alert.alert("Botão OK pressionado")}
        >
          OK
        </Button>
        <Button
          mode="contained"
          onPress={() => Alert.alert("Botão Cancel pressionado")}
        >
          Cancel
        </Button>
      </View>

      <Button
        mode="contained"
        onPress={() => router.navigate("/taskList")}
        style={{ marginTop: 20 }}
      >
        Ir para Lista de Tarefas
      </Button>

      {}
      <Button
        icon="github"
        mode="outlined"
        onPress={() => Linking.openURL("https://github.com/malu-fnb")}
        style={{ marginTop: 20 }}
      >
        malu-fnb
      </Button>

      <View style={styles.space} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  text: {
    fontSize: 16,
    marginTop: 30,
    textAlign: "center",
  },
  input: {
    height: 45,
    width: 250,
    marginVertical: 12,
  },
  space: {
    height: 70,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
    marginTop: 10,
  },
});