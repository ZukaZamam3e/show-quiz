import { Box } from "@mui/material";
import { CategoryModel } from "../../models/CategoryModel";
import { useCSVDownloader, useCSVReader } from "react-papaparse";
import { CSSProperties } from "react";

interface UploadCategoriesProps {
  onSetCategories: (categories: CategoryModel[]) => void;
}

const styles = {
  csvReader: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  } as CSSProperties,
  browseFile: {
    width: "20%",
  } as CSSProperties,
  acceptedFile: {
    border: "1px solid #ccc",
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: "80%",
  } as CSSProperties,
  remove: {
    borderRadius: 0,
    padding: "0 20px",
  } as CSSProperties,
  progressBarBackgroundColor: {
    backgroundColor: "red",
  } as CSSProperties,
};

export const UploadCategories = () => {
  const { CSVReader } = useCSVReader();

  const handleUploadAccepted = (results: any) => {
    console.log("---------------------------");
    console.log(results);
    console.log("---------------------------");
  };

  return (
    <CSVReader onUploadAccepted={handleUploadAccepted}>
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }: any) => (
        <>
          <div style={styles.csvReader}>
            <button type="button" {...getRootProps()} style={styles.browseFile}>
              Browse file
            </button>
            <div style={styles.acceptedFile}>
              {acceptedFile && acceptedFile.name}
            </div>
            <button {...getRemoveFileProps()} style={styles.remove}>
              Remove
            </button>
          </div>
          <ProgressBar style={styles.progressBarBackgroundColor} />
        </>
      )}
    </CSVReader>
  );
};
