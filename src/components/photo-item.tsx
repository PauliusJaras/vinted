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
  const [loaded, setLoaded] = useState<boolean>(false);

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
    <div data-testid="photo-item" ref={ref} className="item">
      <div className="item-overlay">
        <div className="text-container">
          <p className="title">{alt}</p>
          <div className="divider"></div>
          <p className="author">{photographer}</p>
        </div>
        <div className="button-container">
          <div onClick={handleClick} className="fav-button">
            {favourite ? "Favourite" : "Unfavourite"}
          </div>
        </div>
      </div>
      <img
        style={{ opacity: loaded ? "1" : "0" }}
        loading="lazy"
        src={src?.medium}
        alt={alt || "Photo from Pexels"}
        className="photo-image"
        onLoad={() => setLoaded(true)}
        srcSet={`
            ${src.medium} 720w,
            ${src.large} 1200w,
            ${src.large2x} 2048w
          `}
        sizes="(max-width: 720px) 100vw,
         (max-width: 1200px) 50vw,
         100vw"
      />
      <div
        style={{ display: loaded ? "none" : "block" }}
        className="placeholder"
      >
        <img src="/placeholder-image.webp" alt="placeholder"></img>
      </div>
    </div>
  );
}
