const CircularChart = ({ percentage }) => (
  <div className="relative w-48 h-48">
    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
      <circle
        className="text-gray-100"
        strokeWidth="10"
        stroke="currentColor"
        fill="transparent"
        r="45"
        cx="50"
        cy="50"
      />
      <circle
        className="text-yellow-500"
        strokeWidth="10"
        strokeLinecap="round"
        stroke="url(#gradient)"
        fill="transparent"
        r="45"
        cx="50"
        cy="50"
        strokeDasharray={`${percentage * 2.827} 282.7`}
      />
      <defs>
        <linearGradient id="gradient">
          <stop offset="100%" stopColor="#F3C340" />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-3xl font-bold">{percentage}%</span>
    </div>
  </div>
);

export default CircularChart;
