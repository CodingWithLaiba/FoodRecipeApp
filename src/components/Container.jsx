export default function Container({ children }) {
  return (
    <div className="flex gap-9">
      {children}
    </div>
  );
}