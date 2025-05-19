import { useEffect, useState } from "react";

const DataTile = ({ title, endpoint }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () =>
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));

    fetchData();

    const interval = setInterval(fetchData, 30000); // 30 seconds
    return () => clearInterval(interval); // cleanup interval on unmount
  }, [endpoint]);

  return (
    <div className="border rounded p-4 shadow bg-white">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {/* Content based on state */}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && (
        <div className="text-gray-700 text-sm">
          <p className="font-medium">{data.title}</p>
          <p className="text-xs text-gray-500 mt-1">{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default DataTile;
