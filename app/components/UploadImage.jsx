import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { HiArrowUpCircle } from "react-icons/hi2";
function UploadImage({setFile}) {
    const [selectedFile, setSelectedFile] = useState();

  return (
    <div
      className="h-[450px] bg-[#70291c1f]
    rounded-lg hover:bg-[#70291c50]"
    >
      <label
        className="m-5 flex flex-col justify-center items-center
        cursor-pointer h-[90%] 
        border-[2px] border-red-800 border-dashed rounded-lg text-blackW "
      >
        {!selectedFile ? (
          <div className="flex items-center flex-col">
            <HiArrowUpCircle className="text-[22px]" />
            <h2 className=" font-semibold">Upload</h2>
          </div>
        ) : null}
        {selectedFile ? (
          <img
            src={window.URL.createObjectURL(selectedFile)}
            alt="selected-image"
            width={500}
            height={800}
            className="object-contain h-[90%]"
          />
        ) : null}
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setSelectedFile(e.target.files[0]);
          }}
        />
      </label>
    </div>
  );
}

export default UploadImage