import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globa";
import { defaultTheme } from "./styles/Theme/defaultTheme";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}
