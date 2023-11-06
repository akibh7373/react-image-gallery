import React, { useState } from "react";
import Header from "./Header";
import GalleryImg from "./GalleryImg";
import UploadImg from "./UploadImg";
import { images } from "../data/data";

const Gallery = () => {
  const [selectThumbnails, setSelectThumbnails] = useState([]);
  const [thumbnails, setThumbnails] = useState(images);
  const [dragging, setDragging] = useState(false);
  const [draggedImage, setDraggedImage] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const newImages = Array.from(selectedFiles).map((file, index) => {
      const id = thumbnails.length + index + 1;
      const thumbnail = URL.createObjectURL(file);
      return { id, thumbnail };
    });
    setThumbnails([...thumbnails, ...newImages]);
  };
  const handleDeleteClick = () => {
    const updatedImages = thumbnails.filter(
      (image) => !selectThumbnails.some((selected) => selected.id === image.id)
    );
    setThumbnails(updatedImages);
    setSelectThumbnails([]);
  };
  const handleDragStart = (image) => {
    setDragging(true);
    setDraggedImage(image);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e?.target?.children[0]?.alt && setDraggedIndex(e?.target?.children[0]?.alt);
  };
  const handleDrop = (targetIndex) => {
    setDragging(false);
    if (draggedImage) {
      const updatedImages = thumbnails.filter(
        (image) => image.id !== draggedImage.id
      );
      updatedImages.splice(targetIndex, 0, draggedImage);
      setThumbnails(updatedImages);
      setDraggedImage(null);
    }
  };
  return (
    <>
      <div
        className="min-h-screen w-screen flex flex-row items-center justify-center md:p-0 p-4">
        <div className="lg:w-1/2 md:w-3/4 w-full bg-white rounded-lg shadow">
          <div className="flex flex-col">
            {/* HEADER ADDED */}
            <Header
              selectThumbnails={selectThumbnails}
              setSelectThumbnails={setSelectThumbnails}
              handleDeleteClick={handleDeleteClick}
            />
            <hr />
            <section className="h-full w-full p-4">
              <div
                className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-3 gap-4"
                onDragOver={handleDragOver}>
                {thumbnails.map((image, index) => (
                  // GALLRY IMG ADDED
                  <GalleryImg
                    key={index}
                    image={image}
                    index={index}
                    selectThumbnails={selectThumbnails}
                    setSelectThumbnails={setSelectThumbnails}
                    handleDragStart={handleDragStart}
                    handleDrop={handleDrop}
                    dragging={dragging}
                    draggedIndex={draggedIndex}
                  />
                ))}
                {/* UPLOAD IMG ADDED */}
                <UploadImg handleFileChange={handleFileChange} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
