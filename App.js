import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import Braze from "@braze/react-native-sdk";
import { useEffect, useState } from "react";

const userId = "{YOUR_USER_ID}";

/**
 * Status bar modification.
 * We seem to be experiencing the issue only when the status bar is translucent.
 */
StatusBar.setTranslucent(true);
StatusBar.setBarStyle("dark-content", false);
StatusBar.setBackgroundColor("deeppink");

export default function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (userId) {
      Braze.changeUser(userId);
    }
  }, [userId]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => setUserId(USER_ID)} title="Set user ID" />
      <Text>{userId ?? "No user ID set"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
