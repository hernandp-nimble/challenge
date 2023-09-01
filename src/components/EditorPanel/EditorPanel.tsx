import Editor from "@monaco-editor/react";
import { Box } from "@mui/material";
import { FileContext } from "../../FileContext/FileContextProvider";
import { useContext } from "react";

const EditorPanel = () => {
  const { activeFile } = useContext(FileContext);
  return (
    <Box width="100%">
      <Editor
        height="100vh"
        defaultLanguage="javascript"
        value={activeFile.content}
      />
    </Box>
  );
};

export default EditorPanel;
