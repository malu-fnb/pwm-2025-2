import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const queryClient = new QueryClient();


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00695C", 
    secondary: "#00BFA5", 
  },
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Stack />
      </QueryClientProvider>
    </PaperProvider>
  );
}