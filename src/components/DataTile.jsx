import { useEffect, useState, useCallback } from "react";

const DataTile = ({ title, endpoint, id }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const shouldFailRequest = () => {
    return Math.random() < 0.5;
  };

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
      setRetryCount(0);
    } catch (err) {
      setError(err.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  const handleRetry = () => {
    setRetryCount((prevCount) => prevCount + 1);
    if (retryCount > 3) {
      setError("Failed to fetch data after 3 retries");
      return;
    }
    setLoading(true);
    setError(null);
    fetchData();
  };

  const handleRetryClick = (e) => {
    e.stopPropagation();
    handleRetry();
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // 30 seconds
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
