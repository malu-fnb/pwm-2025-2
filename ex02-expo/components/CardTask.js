import { View, StyleSheet } from "react-native";
import { Card, Text, Switch, IconButton } from "react-native-paper";

export function CardTask({ task, onDelete, onCheck }) {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <Text variant="bodyLarge" style={styles.description}>
          {task.description}
        </Text>
        <Switch
          value={task.done}
          onValueChange={() => onCheck(task)}
        />
        <IconButton
          icon="delete"
          iconColor="red"
          onPress={() => onDelete(task.objectId)}
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  description: {
    flex: 1,
    marginRight: 10,
  },
});