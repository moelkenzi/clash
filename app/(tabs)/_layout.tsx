import { Stack } from "expo-router";
export default function InfoLayout() {
  return (
    <Stack>
      <Stack.Screen name='info' options={{ headerShown: false }} />
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  );
}
