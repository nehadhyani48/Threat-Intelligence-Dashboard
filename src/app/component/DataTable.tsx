"use client";
import { useIOCStore } from "../store/useIOCstore";

export default function DataTable() {
  const { iocs } = useIOCStore();

  return (
    <div className="space-y-4">
      {iocs.map((ioc, index) => (
        <div
          key={index}
          className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-700 transition"
        >
          <p>
            <span className="font-semibold text-blue-400">Value:</span>{" "}
            {ioc.value}
          </p>
          <p className="capitalize">
            <span className="font-semibold text-green-400">Type:</span>{" "}
            {ioc.type}
          </p>
          <p>
            <span className="font-semibold text-yellow-400">Source:</span>{" "}
            {ioc.source}
          </p>
          <p>
            <span className="font-semibold text-purple-400">Timestamp:</span>{" "}
            {new Date(ioc.timestamp).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}