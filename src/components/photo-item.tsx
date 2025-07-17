import { useState } from "react";
import { Photo } from "../../types/photo";

type PhotoPreviewProps = Pick<Photo, "alt" | "photographer" | "src"> & {
  ref?: React.Ref<HTMLDivElement>;
  setItem: () => void;
  removeItem: () => void;
  state?: boolean;
};

export default function PhotoItem({
  ref,
  alt,
  photographer,
  src,
  setItem,
  removeItem,
  state = true,
}: PhotoPreviewProps) {
  const [favourite, setFavourite] = useState<boolean>(state);

  const handleClick = () => {
    if (favourite) {
      setFavourite((prevValue) => !prevValue);
      setItem();
    } else {
      setFavourite((prevValue) => !prevValue);
      removeItem();
    }
  };

  return (
    <div ref={ref} className="item">
      <div className="item-overlay">
        <div className="text-container">
          <h3>{alt}</h3>
          <h4>{photographer}</h4>
        </div>
        <div className="button-container">
          <div onClick={handleClick} className="fav-button">
            {favourite ? "Favourite" : "Unfavourite"}
          </div>
        </div>
      </div>
      <img
        src={src?.medium}
        alt={alt || "Photo from Pexels"}
        className="photo-image"
      />
    </div>
  );
}
