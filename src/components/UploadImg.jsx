import React from "react";
import { BiUpload } from "react-icons/bi";
const UploadImg = ({ handleFileChange }) => {
  return (
    <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors ease-linear">
      <input
        type="file"
        multiple
        name="images"
        id="images"
        className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
        onChange={handleFileChange}
      />
      <div className="h-full w-full flex flex-col justify-center items-center gap-y-1">
        <BiUpload size={25}/>
        <span className="whitespace-nowrap md:block hidden">Add Images</span>
      </div>
    </div>
  );
};

export default UploadImg;
