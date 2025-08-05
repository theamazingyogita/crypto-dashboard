import React from 'react'
import { useFetchCoins } from '../hooks/useFetchCoins';
import CryptoTable from '../components/Table/CryptoTable';

const Dashboard = () => {
    const [page, setPage] = useState(1);
    const { coins, loading } = useFetchCoins(page);
    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            <div className="absolute-top-0 left-0 w -[400px] h-[400px] bg-pink-500/30 blur-[150px]"></div>
            <div className="relative-bottom-0 right-0 w -[400px] h-[400px] bg-pink-500/30 blur-[150px]"></div>
            <motion.h1
                className='text-center-5xl font-bold pt-20 neon-text'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Crypto Dashboard
            </motion.h1>
            {loading ? <Loader /> : <CryptoTable coins={coins} page={page} />}
            <Pagination page={page} setPage={setPage} />
        </div>
    );
}

export default Dashboard