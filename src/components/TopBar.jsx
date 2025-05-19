const TopBar = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow">
      <div className="px-4 py-3 flex items-center justify-between">
        <button className="md:hidden" onClick={onMenuClick}>
          <span className="text-gray-600 text-2xl">☰</span>
        </button>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative text-gray-500">
            <input
              type="text"
              placeholder="Search..."
              className="w-full md:w-64 rounded-md border border-gray-300 py-2 px-4 pl-10"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              🔍
            </div>
          </div>

          <div className="ml-4">
            <button className="bg-gray-200 p-2 rounded-full">👤</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
