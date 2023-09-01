import { Box } from "@mui/material";
import FileRow from "../FileRow/FileRow";
import { File, FileStructure } from "../../FileContext/FileContextProvider";
import Folder from "../Folder/Folder";

function renderStructure(structure: FileStructure) {
  if (!structure) return null;
  const sortedKeys = Object.keys(structure).sort();

  return sortedKeys.map((name, index) => {
    const item = structure[name];

    if (name.includes(".")) {
      // It's a file, render a file item
      return (
        <Box key={index} mb={2}>
          <FileRow file={item as File} />
        </Box>
      );
    }
    // It's a folder, recursively render the folder contents
    return (
      <Box key={index}>
        <Folder name={name} />
        <Box style={{ marginLeft: "20px" }}>
          {renderStructure(item as FileStructure)}
        </Box>
      </Box>
    );
  });
}

const FolderStructure = ({ data }: FileStructure) => {
  return <Box textAlign="left">{renderStructure(data as FileStructure)}</Box>;
};

export default FolderStructure;
