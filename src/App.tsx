import { Box } from "@mui/material";
import "./App.css";
import SidePanel from "./components/SidePanel/SidePanel";
import EditorPanel from "./components/EditorPanel/EditorPanel";
import ContextProvider from "./FileContext/FileContextProvider";

function App() {
  return (
    <ContextProvider>
      <Box
        display="flex"
        width="100vw"
        maxHeight="100vh"
        gap={5}
        alignItems="center"
        height="100vh"
      >
        <SidePanel />
        <EditorPanel />
      </Box>
    </ContextProvider>
  );
}

export default App;
