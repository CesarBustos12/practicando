import Card from "./Card";

const TradingFee = ({
  title,
  rate,
  progress,
  icon: Icon,
  iconBgColor = "bg-cyan-100",
  iconColor = "text-cyan-500",
  progressColor = "bg-blue-500",
}) => (
  <Card className="bg-white shadow-lg p-4">
    <div className="relative flex items-center">
      <div className={`p-3 rounded-lg ${iconBgColor}`}>
        {Icon && <Icon className={`w-6 h-6 ${iconColor}`} />}
      </div>

      <div className="ml-5 flex-1">
        <p className="text-2xl font-bold text-gray-800">{rate}</p>
        <p className="text-sm text-gray-500">{title}</p>
        <div className="relative mt-2 h-1 bg-gray-200 rounded-full">
          <div
            className={`absolute top-0 left-0 h-full ${progressColor} rounded-full`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  </Card>
);

export default TradingFee;
