// services/coinService.js
export async function fetchCoins(page = 1, perPage = 10, currency = "usd") {
  const url = `https://api.coingecko.com/api/v3/coins/markets
    ?vs_currency=${currency}
    &order=market_cap_desc
    &per_page=${perPage}
    &page=${page}
    &sparkline=true
    &price_change_percentage=1h,24h,7d`
    .replace(/\s+/g, ''); // remove spaces/newlines

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_CG_API_KEY, // from your .env
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching coins: ${response.status}`);
  }

  return response.json();
}
