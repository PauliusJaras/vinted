export default function ErrorCard({ error }: { error: string }) {
  return (
    <div data-testid="error-card" className="error-card">
      Error: {error}
    </div>
  );
}
