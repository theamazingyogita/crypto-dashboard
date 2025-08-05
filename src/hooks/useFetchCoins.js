
import { useEffect, useState } from "react";
import { fetchCoins } from "../api/coingecko"
export const useFetchCoins = (page) => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchCoins(page).then(setCoins).catch(console.error).finally(() => setLoading(false));
    }, [page]);
    return { coins, loading };
};