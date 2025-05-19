const SimpleChart = () => {
  // a placeholder for a real chart library like Chart.js or Recharts
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-full flex items-end gap-2 pt-4">
        {[35, 60, 25, 75, 45, 65, 35, 85, 55, 40, 70].map((value, i) => (
          <div
            key={i}
            className="bg-indigo-500 w-full rounded-t"
            style={{ height: `${value}%` }}
          ></div>
        ))}
      </div>
      <div className="h-6 flex justify-between text-xs text-gray-500 mt-2">
        {/* TODO: there's probably a library that can do this */}
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
      </div>
    </div>
  );
};

export default SimpleChart;
