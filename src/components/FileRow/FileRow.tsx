import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { FileContext } from "../../FileContext/FileContextProvider";
import FileIcon from "../FileIcon/FileIcon";

type Props = {
  file: {
    path: string;
    content: string;
  };
};
const FileRow = ({ file }: Props) => {
  const { setActiveFile, activeFile } = useContext(FileContext);

  return (
    <Box
      display="flex"
      borderRadius="10px"
      px={2}
      py={1}
      gap={1}
      onClick={() => setActiveFile(file)}
      bgcolor={activeFile.path === file.path ? "gray" : "transparent"}
    >
      <FileIcon fileName={file.path} />
      <Typography textAlign="left">{file.path}</Typography>
    </Box>
  );
};

export default FileRow;
