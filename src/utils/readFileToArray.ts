import fs from "fs";

export const readFileToArray = (filePath: string): string[] => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data.split("\n"); // Divise le contenu du fichier à chaque nouvelle ligne
  } catch (error) {
    console.error("Error reading file:", error);
    return [];
  }
};
