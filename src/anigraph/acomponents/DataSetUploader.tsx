
import { useRef } from "react";
import { GetAppState } from "../amvc";

export function DataSetUploader() {
  const DataSetUploader = useRef<HTMLInputElement>(null);
  function uploadDataSet() {
    const files = DataSetUploader.current!.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        GetAppState().dataSetUploaded(file);
      }
    }
  }


  return (
    <>
      <label style={{ cursor: "pointer" }}>
        Upload Data File: &nbsp;
    </label>
      <input
        id="DataSetUploader"
        className="hidden"
        ref={DataSetUploader}
        onChange={uploadDataSet}
        type="file"
      />
    </>
  );
}
