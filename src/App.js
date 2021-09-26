import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Global";
import { lightTheme, darkTheme } from "./components/styles/Themes";
import content from "./content";
import { ToggleButton } from "./components/styles/ToggleButton.styled";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = (e) => {
    theme === "light" ? setTheme("dark") : setTheme("light");

    const newVal = theme === "light" ? "Dark theme" : "Light Theme";

    e.target.value = newVal;

    console.log(e.target.value);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <ToggleButton
          type="button"
          onClick={themeToggler}
          value="Switch Theme"
        />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
