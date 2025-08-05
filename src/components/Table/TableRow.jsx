import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";

import React from 'react'

const TableRow = ({ coin, index }) => {
    const positive7d = coin.price_change_percentage_7d_in_currency > 0;
    const color7d = positive7d ? "rgb(34,197,94)" : "rgb(230,68,68)";
    return (
        <motion.tr
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-gray-800"
        >
            <td className="p-2">{index}</td>
            <td className="p-2 flex items-center gap-2">
                <img src={coin.img} alt={coin.name} className="w-6 h-6" />
                {coin.name}
            </td>
            <td className="p-2">{coin.current_price.toLocaleString()}</td>
            <td className="p-2"> {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%</td>
            <td className="p-2"> {coin.price_change_percentage_24h?.toFixed(2)}%</td>

            <td
                className="p-2"
            >{coin.price_change_percentage_7d_in_currency != null ? coin.price_change_percentage_7d_in_currency.toFixed(2) + "%" : "—"}
            </td>
            <td className="p-2">${coin.total_volume.toLocaleString()}</td>
            <td className="p-2">${coin.market_cap.toLocaleString()}</td>
            <td className="p-2 w-32">
                <Line
                    data={{
                        labels: coin.sparkline_in_7d.price.map((_, i) => i),
                        datasets: [{ data: coin.sparkline_in_7d.price, borderColor: color7d, borderWidth: 1, pointRadius: 0 }]
                    }}
                    options={{
                        plugins: { legend: { display: false } },
                        elements: { line: { tension: 0.2 } },
                        scales: { x: { display: false }, y: { display: false } },
                    }}
                />
            </td>
            Crypto Dashboard
        </motion.tr >

    )
}

export default TableRow