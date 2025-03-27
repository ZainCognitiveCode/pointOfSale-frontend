export default function Button({ onClick, colorType, type, children }) {
  let className =
    "px-4 py-2 rounded-md font-semibold transition cursor-pointer";
  if (colorType === "primary") {
    className += " bg-indigo-600 text-white hover:bg-indigo-700";
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
