export default function Notification({ message, type }) {
  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };
  return (
    <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-white ${colors[type] || "bg-gray-700"}`}>
      {message}
    </div>
  );
}
