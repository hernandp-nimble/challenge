import { Box, Button, Input, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { FileContext } from "../../FileContext/FileContextProvider";

const Folder = ({ name }: { name: string }) => {
  const [openInput, setOpenInput] = useState(false);
  const [fileValue, setFileValue] = useState("");
  const { createFile } = useContext(FileContext);

  const handleFileCreation = () => {
    if (!fileValue.includes(".")) return null;
    const file = { path: fileValue, content: "" };
    createFile(file);
  };

  return (
    <Box>
      <Box display="flex" gap={2} alignItems="center" mb={2}>
        <Typography bgcolor="lightgray" py={1} px={2}>
          {name}
        </Typography>
        <Box
          color="blue"
          fontSize={18}
          fontWeight="bold"
          onClick={() => setOpenInput(true)}
          sx={{ cursor: "pointer" }}
        >
          +
        </Box>
      </Box>
      {openInput && (
        <Box display="flex" gap={2} mb={2}>
          <Input
            value={fileValue}
            placeholder="file path"
            onChange={(e) => {
              setFileValue(e.target.value);
            }}
          />
          <Button variant="contained" onClick={() => handleFileCreation()}>
            Create file
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Folder;
