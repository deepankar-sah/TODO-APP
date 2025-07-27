import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  const todo = useQuery(api.todos.getTodos);
  console.log(todo);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
}
