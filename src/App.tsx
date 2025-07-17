import "./App.scss";
import PhotoContainer from "./components/photo-container";
import PhotoItem from "./components/photo-item";
import { useRef, useState, useCallback } from "react";
import usePhotos from "./hooks/usePhotos";
import PhotoSkeleton from "./components/photo-skeleton";
import useLocalStorage from "./hooks/useLocalStorage";
import { Photo } from "../types/photo";

function App() {
  const loadingArr = new Array(9).fill("");
  const [pageNum, setPageNum] = useState<number>(1);
  const { isLoading, isError, error, results, hasNextPage } =
    usePhotos(pageNum);
  const [storageResults, setFavourite, removeFavourite] =
    useLocalStorage("Favourites");
  const favourites: Photo[] = [];

  const intObserver = useRef<IntersectionObserver | null>(null);
  const lastPostRef = useCallback(
    (photo: HTMLDivElement | null) => {
      if (isLoading) {
        return;
      }

      if (intObserver.current) {
        intObserver.current.disconnect();
      }

      intObserver.current = new IntersectionObserver((photos) => {
        if (photos[0].isIntersecting) {
          setPageNum((prevPage) => prevPage + 1);
        }
      });

      if (photo) {
        intObserver.current.observe(photo);
      }
    },
    [isLoading]
  );

  if (storageResults) {
    storageResults.map((result) => favourites.push(result.data as Photo));
  }

  return (
    <main>
      <PhotoContainer>
        {[...favourites, ...results]?.map((photo, index) => {
          const key = photo?.id + index || index;

          if (index < favourites.length) {
            return (
              <PhotoItem
                state={false}
                key={key}
                setItem={() => setFavourite({ data: photo, id: photo.id })}
                removeItem={() => removeFavourite(photo.id)}
                alt={photo?.alt || "Pexels image"}
                src={photo?.src}
                photographer={photo?.photographer}
              />
            );
          }

          if (results.length === index + 1) {
            return (
              <PhotoItem
                ref={lastPostRef}
                key={key}
                setItem={() => setFavourite({ data: photo, id: photo.id })}
                removeItem={() => removeFavourite(photo.id)}
                alt={photo?.alt || "Pexels image"}
                src={photo?.src}
                photographer={photo?.photographer}
              />
            );
          } else {
            return (
              <PhotoItem
                key={key}
                setItem={() => setFavourite({ data: photo, id: photo.id })}
                removeItem={() => removeFavourite(photo.id)}
                alt={photo?.alt || "Pexels image"}
                src={photo?.src}
                photographer={photo?.photographer}
              />
            );
          }
        })}
      </PhotoContainer>
      {isLoading &&
        loadingArr.map((_, index) => {
          return <PhotoSkeleton key={index} />;
        })}
    </main>
  );
}

export default App;
