import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import ChartErrorBoundary from "../Table/ChartErrorBoundary";

const color7d = "#3b82f6"; // Example sparkline color (Tailwind blue-500)

const CryptoOverviewCard = () => {
  const [globalData, setGlobalData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [topGainers, setTopGainers] = useState([]);
  const [marketCapSparkline, setMarketCapSparkline] = useState([]);
  const [volumeSparkline, setVolumeSparkline] = useState([]);

  useEffect(() => {
    fetchGlobalData();
    fetchTrending();
    fetchTopGainers();
    fetchGlobalSparklines(); // Fetch mock sparkline data for global metrics
  }, []);

  const fetchGlobalData = async () => {
    const { data } = await axios.get("https://api.coingecko.com/api/v3/global");
    setGlobalData(data.data);
  };

  const fetchTrending = async () => {
    const { data } = await axios.get("https://api.coingecko.com/api/v3/search/trending");

    // Fetch sparkline data for each trending coin
    const trendingWithSparklines = await Promise.all(
      data.coins.map(async (coinWrapper) => {
        const coin = coinWrapper.item;
        try {
          const { data: chartData } = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart`,
            { params: { vs_currency: "usd", days: 7 } }
          );

          return {
            ...coin,
            sparkline: chartData.prices.map((point) => point[1]),
          };
        } catch {
          return { ...coin, sparkline: [] };
        }
      })
    );

    setTrendingCoins(trendingWithSparklines);
  };

  const fetchTopGainers = async () => {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=24h"
    );
    const sorted = [...data].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    setTopGainers(sorted.slice(0, 8));
  };

  const fetchGlobalSparklines = async () => {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
    );
    setMarketCapSparkline(data.market_caps.map((point) => point[1]));
    setVolumeSparkline(data.total_volumes.map((point) => point[1]));
  };

  return (
    <>
      <div className="flex gap-4 p-6 font-mono">
  {/* Column 1: Market Cap & Volume (stacked vertically) */}
  <div className="flex flex-col gap-4 flex-1 ">
    <div className="card p-4 bg-black text-white rounded z-80">
      {globalData && (
        <>
          <h4 className="font-semibold text-sm text-white">Market Cap</h4>
          <p className="text-lg">${Number(globalData.total_market_cap.usd).toLocaleString()}</p>
          <div className="h-10">
            <ChartErrorBoundary>
              {marketCapSparkline.length > 0 ? (
                <Line
                  redraw
                  data={{
                    labels: marketCapSparkline.map((_, i) => i),
                    datasets: [{ data: marketCapSparkline, borderColor: color7d, borderWidth: 1, pointRadius: 0 }],
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
                <span className="text-white text-xs">No Data</span>
              )}
            </ChartErrorBoundary>
          </div>
        </>
      )}
    </div>

    <div className="card p-4 bg-black text-white rounded font-mono">
      {globalData && (
        <>
          <h4 className="font-semibold text-sm text-white">24h Volume</h4>
          <p className="text-lg">${Number(globalData.total_volume.usd).toLocaleString()}</p>
          <div className="h-10">
            <ChartErrorBoundary>
              {volumeSparkline.length > 0 ? (
                <Line
                  redraw
                  data={{
                    labels: volumeSparkline.map((_, i) => i),
                    datasets: [{ data: volumeSparkline, borderColor: color7d, borderWidth: 1, pointRadius: 0 }],
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
                <span className="text-white text-xs">No Data</span>
              )}
            </ChartErrorBoundary>
          </div>
        </>
      )}
    </div>
  </div>

  {/* Column 2: Trending Coins */}
  <div className="card p-4 bg-black text-white rounded flex-1 font-mono">
    <h3 className="text-lg font-semibold mb-2">Trending Coins</h3>
    <ul>
      {trendingCoins.slice(0,3).map((coin) => (
        <li key={coin.id} className="flex items-center space-x-2 mb-4">
          <img src={coin.small} alt={coin.name} className="w-5 h-5" />
          <span>{coin.name}</span>
          <span className="text-white text-sm">({coin.symbol.toUpperCase()})</span>
          <div className="w-24 h-8 ml-auto">
            <ChartErrorBoundary>
              {coin.sparkline?.length > 0 ? (
                <Line
                  redraw
                  data={{
                    labels: coin.sparkline.map((_, i) => i),
                    datasets: [{ data: coin.sparkline, borderColor: color7d, borderWidth: 1, pointRadius: 0 }],
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
                <span className="text-white text-xs">No Chart</span>
              )}
            </ChartErrorBoundary>
          </div>
        </li>
      ))}
    </ul>
  </div>

  {/* Column 3: Top Gainers */}
  <div className="card p-4  text-white rounded flex-1">
    <h3 className="text-lg font-semibold mb-2">Top Gainers</h3>
    <ul>
      {topGainers.slice(0,5).map((coin) => (
        <li key={coin.id} className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <img src={coin.image} alt={coin.name} className="w-5 h-5" />
            <span>{coin.name}</span>
          </div>
          <span className="text-green-500 font-semibold text-sm">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </span>
        </li>
      ))}
    </ul>
  </div>
</div>

    </>
  );
};

export default CryptoOverviewCard;
