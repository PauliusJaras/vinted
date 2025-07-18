export default function ErrorCard({ error }: { error: string }) {
  return <div className="error-card">Error: {error}</div>;
}
