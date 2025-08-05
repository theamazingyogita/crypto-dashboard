
export const fetchCoins = async (page = 1, perPage = 10) => {
    const url = `https://api.coingecko.com/api/v3/coins/markets
    ?vs_currency=usd
    &order=market_cap_desc
    &per_page=${perPage}
    &page=${page}
    &sparkline=true
    &price_change_percentage=1h,24h,7d`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch status");
    return res.json();
};