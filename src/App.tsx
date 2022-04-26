import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Button,
  Paper,
  createStyles,
} from "@mantine/core";
import { ThemeSwitcher } from "./ThemeSwitcher";
import EditorCollection from "./EditorCollection";

const useStyles = createStyles((theme) => ({
  main: {
    minHeight: "100vh",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    gap: "1rem",
    padding: "1rem",
  },
}));

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const { classes } = useStyles();

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <Paper className={classes.main} radius={0}>
          <div className={classes.container}>
            <ThemeSwitcher />
            <EditorCollection />
          </div>
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
