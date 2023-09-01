import { Box, Button, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { FileContext } from "../../FileContext/FileContextProvider";
import Folder from "../FolderStructure/FolderStructure";
const SidePanel = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { fileStructure } = useContext(FileContext);

  return (
    <>
      <Stack px={4} width="full" display="flex" height="100%" bgcolor="beige">
        <Box
          py={2}
          display="flex"
          flexDirection="column"
          gap={2}
          overflow="auto"
          maxHeight={600}
        >
          <Folder data={fileStructure} />
          <Button
            variant="contained"
            onClick={() => setModalOpen(!isModalOpen)}
          >
            Add File
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default SidePanel;
