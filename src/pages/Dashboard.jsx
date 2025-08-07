import { useState } from "react";
import CryptoTable from "../components/Table/CryptoTable"; // <-- your new table component
import MenuBar from "../components/UI/MenuBar";
import Pagination from "../components/UI/Pagination";
import { useFetchCoins } from "../hooks/useFetchCoins";

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const { coins, loading } = useFetchCoins(page);

  return (
    <div className="min-h-screen bg-black text-white p-6 relative m-0 mx-0 p-0">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/30 blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/20 blur-[150px]"></div>
  
      {/* Heading */}
     
<MenuBar/>

      {/* Table */}
      <div className="overflow-x-auto relative z-10 my-10 mx-10">
        <table className="w-full border-collapse">
          <tbody>
            <CryptoTable coins={coins} loading={loading} page={page} />
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
