const Sidebar = ({ open, setOpen }) => {
  const navigationItems = [
    { name: "Dashboard", icon: "🏠" },
    { name: "Users", icon: "👥" },
    { name: "Analytics", icon: "📊" },
    { name: "Settings", icon: "⚙️" },
  ];

  return (
    <>
      {/* Mobile sidebar overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar for mobile - slides in */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo area */}
        <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
          <div className="text-xl font-bold text-white">DashApp</div>
          <button
            className="text-gray-400 md:hidden"
            onClick={() => setOpen(false)}
          >
            <span className="text-2xl">×</span>
          </button>
        </div>

        {/* Navigation items */}
        <nav className="mt-5 px-2">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.name} className="mb-2">
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-300 rounded-md hover:bg-gray-700"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
