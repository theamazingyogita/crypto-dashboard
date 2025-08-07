import { motion as Motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import "../../chartConfig";
import ChartErrorBoundary from "../Table/ChartErrorBoundary";

const TableRow = ({ coin, index }) => {
  if (!coin) return null;

  const positive7d = (coin.price_change_percentage_7d_in_currency ?? 0) > 0;
  const color7d = positive7d ? "rgb(34,197,94)" : "rgb(230,68,68)";
  const sparklineData = Array.isArray(coin.sparkline_in_7d?.price)
    ? coin.sparkline_in_7d.price.filter(v => typeof v === "number" && !isNaN(v))
    : [];

  return (
    <Motion.tr initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="border-b border-gray-800">
      <td className="p-2">{index ?? "-"}</td>
     <td className="p-2 h-full align-middle">
  <div className="flex items-center gap-2">
    <img src={coin.image || "https://via.placeholder.com/20"} alt={coin.name || "Unknown"} className="w-3 h-3" />
    {coin.name ?? "N/A"}
  </div>
</td>
      <td className="p-2">${coin.current_price?.toLocaleString() ?? "0.00"}</td>
      <td className={`p-2 ${(coin.price_change_percentage_1h_in_currency ?? 0) > 0 ? "text-green-400" : "text-red-400"}`}>
        {coin.price_change_percentage_1h_in_currency?.toFixed(2) ?? "0.00"}%
      </td>
      <td className={`p-2 ${(coin.price_change_percentage_24h ?? 0) > 0 ? "text-green-400" : "text-red-400"}`}>
        {coin.price_change_percentage_24h?.toFixed(2) ?? "0.00"}%
      </td>
      <td className={`p-2 ${positive7d ? "text-green-400" : "text-red-400"}`}>
        {coin.price_change_percentage_7d_in_currency?.toFixed(2) ?? "0.00"}%
      </td>
      <td className="p-2">${coin.total_volume?.toLocaleString() ?? "0"}</td>
      <td className="p-2">${coin.market_cap?.toLocaleString() ?? "0"}</td>
      <td className="p-2 w-32">
        <ChartErrorBoundary>
          {sparklineData.length > 0 ? (
            <Line
              redraw
              data={{
                labels: sparklineData.map((_, i) => i),
                datasets: [{ data: sparklineData, borderColor: color7d, borderWidth: 1, pointRadius: 0 }],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                elements: { line: { tension: 0.2 } },
                scales: { x: { display: false }, y: { display: false } },
              }}
            />
          ) : (
            <span className="text-gray-500 text-xs">No Data</span>
          )}
        </ChartErrorBoundary>
      </td>
    </Motion.tr>
  );
};

export default TableRow;
