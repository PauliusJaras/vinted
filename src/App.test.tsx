import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import PhotoContainer from "./components/photo-container";
import { photos } from "./dummy-data/photos";
import PhotoItem from "./components/photo-item";

test("renders photo container", () => {
  render(<App />);
  const element = screen.getByTestId("photo-container");
  expect(element).toBeInTheDocument();
});

test("renders photo skeleton", () => {
  render(<App />);
  const element = screen.getAllByTestId("photo-skeleton");
  expect(element.length).toBeGreaterThan(0);
});

test("renders photo items correctly", () => {
  const setFavourite = jest.fn();
  const removeFavourite = jest.fn();
  const lastPostRef = jest.fn();

  render(
    <PhotoContainer>
      {photos.map((photo, index) => {
        const key = photo?.id + index || index;

        if (photos.length === index + 1) {
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
  );

  const items = screen.getAllByTestId("photo-item");
  expect(items).toHaveLength(photos.length);
});
