import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "BRSonoma-Regular": require("@/assets/fonts/BRSonoma-Regular.otf"),
    "BRSonoma-Medium": require("@/assets/fonts/BRSonoma-Medium.otf"),
    "BRSonoma-SemiBold": require("@/assets/fonts/BRSonoma-SemiBold.otf"),
    "BRSonoma-Bold": require("@/assets/fonts/BRSonoma-Bold.otf"),
    "Clash-Bold": require("@/assets/fonts/Clash_Bold.otf"),
    "Clash-Regular": require("@/assets/fonts/Clash_Regular.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}
