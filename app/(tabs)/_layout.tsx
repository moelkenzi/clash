import { Tabs } from "expo-router";
export default function InfoLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{ headerShown: false }} />
      <Tabs.Screen name='discover' options={{ headerShown: false }} />
      <Tabs.Screen name='tv' options={{ headerShown: false }} />
      <Tabs.Screen name='favourite' options={{ headerShown: false }} />
      <Tabs.Screen name='settings' options={{ headerShown: false }} />
    </Tabs>
  );
}
