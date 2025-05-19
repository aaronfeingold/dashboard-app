const StatCard = ({ stat }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
          {/* Icon placeholder */}
          <div className="h-6 w-6 text-white flex items-center justify-center">
            {stat.icon || "📈"}
          </div>
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">
              {stat.title}
            </dt>
            <dd>
              <div className="text-lg font-medium text-gray-900">
                {stat.value}
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 px-4 py-4 sm:px-6">
      <div className="text-sm">
        <span
          className={
            stat.change.startsWith("+") ? "text-green-600" : "text-red-600"
          }
        >
          {stat.change}
        </span>
        <span className="text-gray-500 ml-2">from previous period</span>
      </div>
    </div>
  </div>
);

export default StatCard;
