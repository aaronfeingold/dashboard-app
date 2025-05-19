import { useEffect, useState, useCallback } from "react";

const DataTile = ({ title, endpoint, id }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const shouldFailRequest = useCallback(() => {
    return Math.random() < 0.5;
  }, [id]);

  const fetchData = useCallback(async () => {
    try {
      console.log("fetching data");
      setLoading(true);
      if (shouldFailRequest()) {
        throw new Error("Failed to fetch data (simulated)");
      }
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      const data = await response.json();
      setData(data);
      setError(null);
    } catch (err) {
      setError(err.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }, [endpoint, shouldFailRequest]);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchData();
  };

  const handleRetryClick = (e) => {
    // Stop the event from bubbling up to parent elements
    e.stopPropagation();

    // Call your retry logic
    handleRetry();
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // 30 seconds
    return () => clearInterval(interval); // cleanup interval on unmount
  }, [fetchData]);

  return (
    <div
      key={id}
      data-testid={`data-tile-${id}`}
      className="border rounded p-4 shadow bg-white"
    >
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {/* Content based on state */}
      {loading && (
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-4/6"></div>
        </div>
      )}
      {error && !loading && (
        <div className="border rounded p-3 border-red-200 text-red-500">
          <p>Error: {error}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded mt-2 font-medium"
            onClick={handleRetryClick}
          >
            Retry
          </button>
        </div>
      )}
      {data && !loading && !error && (
        <div className="text-gray-700 text-sm">
          <p className="font-medium">{data.title}</p>
          <p className="text-xs text-gray-500 mt-1">{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default DataTile;
