import UserCard from "./UserCard";
import StatCard from "./StatCard";
import SimpleChart from "./SimpleChart";
import TogglePanel from "./TogglePanel";

const Dashboard = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Developer",
      performance: 85,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Designer",
      performance: 92,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Manager",
      performance: 78,
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "Marketing",
      performance: 88,
    },
  ];

  const statCategories = [
    {
      id: "user-stats",
      title: "User Statistics",
      defaultOpen: true,
      stats: [
        { title: "Total Users", value: "12,345", change: "+5%", icon: "👥" },
        { title: "Active Users", value: "8,932", change: "+2.5%", icon: "🏃" },
      ],
    },
    {
      id: "financial-stats",
      title: "Financial Overview",
      defaultOpen: false,
      stats: [
        { title: "Revenue", value: "$34,232", change: "+2.5%", icon: "💰" },
        { title: "Expenses", value: "$18,445", change: "-3.2%", icon: "💸" },
      ],
    },
    {
      id: "project-stats",
      title: "Project Metrics",
      defaultOpen: false,
      stats: [
        { title: "Active Projects", value: "23", change: "-3%", icon: "📋" },
        { title: "Completion Rate", value: "87%", change: "+4.6%", icon: "✅" },
      ],
    },
  ];

  return (
    <main className="py-6 px-4">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

      {/* Stats Overview */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {statCategories.map((category) => (
          <TogglePanel
            key={category.id}
            title={category.title}
            defaultOpen={category.defaultOpen}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {category.stats.map((stat) => (
                <StatCard key={stat.title} stat={stat} />
              ))}
            </div>
          </TogglePanel>
        ))}
      </div>

      {/* Chart and User List in a two-column layout */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900">
            Performance Chart
          </h2>
          <div className="mt-4 h-64">
            <SimpleChart />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">User List</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
