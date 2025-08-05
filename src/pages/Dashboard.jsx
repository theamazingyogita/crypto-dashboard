import { useState } from "react";
import { useFetchCoins } from "../hooks/useFetchCoins";
import CryptoTable from "../components/Table/CryptoTable";
import Pagination from "../components/UI/Pagination";
import Loader from "../components/UI/Loader";
import { motion } from "framer-motion";

export default function Dashboard() {
    const [page, setPage] = useState(1);
    const { coins, loading } = useFetchCoins(page);

    return (
        <div className="min-h-screen bg-black text-white p-6 relative">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/30 blur-[150px]"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/20 blur-[150px]"></div>
            <motion.h1
                className="text-center text-4xl font-bold mb-8 relative z-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Crypto Dashboard
            </motion.h1>

            {loading ? <Loader /> : <CryptoTable coins={coins} page={page} />}
            <Pagination page={page} setPage={setPage} />
        </div>
    );
}