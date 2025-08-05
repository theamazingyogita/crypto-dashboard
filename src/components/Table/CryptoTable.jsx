import SkeletonRow from "../Table/SkeletonRow";
import TableRow from "./TableRow";

const CryptoTable = ({ coins = [],loading, page }) => {
  // Ensure coins is an array and filter out invalid items
  const safeCoins = Array.isArray(coins)
    ? coins.filter((c) => c && typeof c === "object")
    : [];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-2">#</th>
            <th className="p-2">Coin</th>
            <th className="p-2">Price</th>
            <th className="p-2">1h</th>
            <th className="p-2">24h</th>
            <th className="p-2">7d</th>
            <th className="p-2">24h Volume</th>
            <th className="p-2">Market Cap</th>
            <th className="p-2">Last 7 Days</th>
          </tr>
        </thead>
      <tbody>
  {loading ? (
    // Show shimmer skeletons while loading
    Array.from({ length: 10 }).map((_, i) => <SkeletonRow key={i} />)
  ) : safeCoins.length > 0 ? (
    // Show actual data if available
    safeCoins.map((coin, i) => (
      <TableRow
        key={coin.id || i}
        coin={coin}
        index={(page - 1) * 10 + i + 1}
      />
    ))
  ) : (
    // Fallback: no coins
    <tr>
      <td colSpan="9" className="text-center p-4 text-gray-500">
        No coins available
      </td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  );
};

export default CryptoTable;
