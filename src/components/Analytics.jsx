import DataTile from "./DataTile";

const Analytics = () => {
  const dataTiles = [
    {
      id: 1,
      title: "Post Data",
      endpoint: "https://jsonplaceholder.typicode.com/posts/1",
    },
    {
      id: 2,
      title: "User Info",
      endpoint: "https://jsonplaceholder.typicode.com/posts/2",
    },
    {
      id: 3,
      title: "Metrics",
      endpoint: "https://jsonplaceholder.typicode.com/posts/3",
    },
    {
      id: 4,
      title: "Performance",
      endpoint: "https://jsonplaceholder.typicode.com/posts/4",
    },
  ];

  return (
    <main className="py-6 px-4">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataTiles.map((tile) => (
          <DataTile key={tile.id} title={tile.title} endpoint={tile.endpoint} />
        ))}
      </div>
    </main>
  );
};

export default Analytics;
