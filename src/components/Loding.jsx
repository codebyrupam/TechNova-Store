const Loding = ({ message = "Loading..." }) => (
  <div
    role="status"
    className="flex flex-col items-center justify-center py-24 text-gray-400"
  >
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-orange-500" />
    <p className="mt-4 text-sm">{message}</p>
  </div>
);

export default Loding;
