import { Dispatch, SetStateAction } from "react";

type FileUploadProps = {
  onFieldChange: (value: any) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

function FileUploader({ onFieldChange, imageUrl, setFiles }: FileUploadProps) {
  return <div>FileUploader</div>;
}

export default FileUploader;
