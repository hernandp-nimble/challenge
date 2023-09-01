import { themeIcons } from "seti-icons";

const getIcon = themeIcons({
  blue: "#268bd2",
  grey: "#657b83",
  "grey-light": "#839496",
  green: "#859900",
  orange: "#cb4b16",
  pink: "#d33682",
  purple: "#6c71c4",
  red: "#dc322f",
  white: "#fdf6e3",
  yellow: "#b58900",
  ignore: "#586e75",
});

const FileIcon = ({ fileName }: { fileName: string }) => {
  const { svg, color } = getIcon(fileName);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: color,

      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    >
    </div>
  );
};

export default FileIcon;
