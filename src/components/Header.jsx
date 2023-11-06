import React from "react";

const Header = ({
  selectThumbnails,
  setSelectThumbnails,
  handleDeleteClick,
}) => {
  return (
    <header className="flex flex-row justify-between items-center lg:py-3 py-2 md:px-6 px-3">
        <h1 className="text-2xl font-bold">
          {selectThumbnails.length === 0 ? (
            "Gallery"
          ) : (
            <label
              htmlFor="select"
              className="flex flex-row justify-between items-center gap-x-2">
              <input
                type="checkbox"
                name="select"
                id="select"
                checked={selectThumbnails.length > 0}
                className="h-4 w-4 cursor-pointer"
                onChange={() => setSelectThumbnails([])}
              />
              {selectThumbnails.length} Files Selected
            </label>
          )}
        </h1>
        <button
          className="text-red-700 font-medium md:text-lg text-md"
          onClick={handleDeleteClick}>
          Delete files
        </button>
    </header>
  );
};

export default Header;
