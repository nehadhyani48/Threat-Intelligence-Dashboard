"use client";
import { useEffect, useState } from "react";
import { fetchIOCs } from "../app/lib/fetchIOCs";
import { useIOCStore } from "../app/store/useIOCstore";
import IOCTable from "../app/component/IocTable";
import SummaryWidget from "../app/component/SummaryCards";
import Loader from "../app/component/loader";
import Filters from "../app/component/Filters";

export default function Dashboard() {
  const { iocs, setIOCs } = useIOCStore();
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(iocs);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchIOCs();
      setIOCs(data);
      setFilteredData(data); // reset filters on new fetch
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <main className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Threat Intelligence Dashboard</h1>
        <button
          onClick={loadData}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          <SummaryWidget data={filteredData} />
          <Filters data={iocs} onFilter={setFilteredData} />
          <IOCTable data={filteredData} />
        </>
      )}
    </main>
  );
}