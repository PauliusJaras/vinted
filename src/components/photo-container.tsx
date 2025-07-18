export default function PhotoContainer({ children }: React.PropsWithChildren) {
  return (
    <div data-testid="photo-container" className="photo-container">
      {children}
    </div>
  );
}
