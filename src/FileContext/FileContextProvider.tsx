import { createContext, useMemo, useState } from "react";
import { files as defaultFiles } from "../components/files";

export type File = {
  path: string;
  content: string;
};

export type FileStructure = {
  [key: string]: FileStructure | File;
};

export const FileContext = createContext<{
  files: typeof defaultFiles;
  setFiles: React.Dispatch<React.SetStateAction<typeof defaultFiles>>;
  activeFile: (typeof defaultFiles)[number];
  setActiveFile: React.Dispatch<
    React.SetStateAction<(typeof defaultFiles)[number]>
  >;
  fileStructure: FileStructure;
  createFile: (file: File) => void;
}>({
  files: defaultFiles,
  activeFile: defaultFiles[0],
  setActiveFile: () => {},
  setFiles: () => {},
  fileStructure: {},
  createFile: () => {},
});

type Props = {
  children: React.ReactNode;
};
const ContextProvider = ({ children }: Props) => {
  const [files, setFiles] = useState(defaultFiles);
  const [activeFile, setActiveFile] = useState(defaultFiles[0]);

  const fileStructure = useMemo(() => {
    const fileStructure = {} as FileStructure;

    files.forEach((file) => {
      console.log(file)
      const path = file.path.split("/");
      let currentFolder = fileStructure;
      path.forEach((pathPart, index) => {
        // base case is a file
        if (index === path.length - 1) {
          currentFolder[pathPart] = file;
        } else {
          // is folder and does not exist on struture
          if (!currentFolder[pathPart]) {
            currentFolder[pathPart] = {};
            currentFolder = currentFolder[pathPart] as FileStructure;
          } else {
            // is folder and exists on structure
            currentFolder = currentFolder[pathPart] as FileStructure;
          }
        }
      });
    });

    return fileStructure;
  }, [files]);

  const createFile = (file: File) => {
    setFiles([...files, file]);
  };

  return (
    <FileContext.Provider
      value={{
        files,
        setFiles,
        activeFile,
        setActiveFile,
        fileStructure,
        createFile,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default ContextProvider;
