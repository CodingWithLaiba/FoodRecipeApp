export default function InnerContainer({ children, className = "" }) {
  return (
    <div className={`p-2.5 m-2.5 ${className}`}>
      {children}
    </div>
  );
}