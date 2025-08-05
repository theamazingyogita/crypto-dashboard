import { div } from "framer-motion/client";
import TableRow from "./TableRow";
export default function CryptoTable({ coins, page }) {
    return (
        <div className="overflow=x-auto">
            <table className="w-full text-left border-collapse">
                <thread>
                    <tr className="border-b border-pink-500/30">
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
                </thread>
                <tbody>
                    {coins.map((coin, i) => (
                        <TableRow key={coin.id} index={(page - 1) * 10 + i + 1} />

                    ))}
                </tbody>
            </table>

        </div>
    );
}