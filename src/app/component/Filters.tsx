"use client";
import { useState, useEffect } from "react";
import { IOC } from "../types/ioc";

interface Props {
  data: IOC[];
  onFilter: (filtered: IOC[]) => void;
}

export default function Filters({ data, onFilter }: Props) {
  const [type, setType] = useState<string>("all");
  const [source, setSource] = useState<string>("all");
  const [sort, setSort] = useState<string>("latest");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    applyFilters();
  }, [type, source, sort, search, data]);

  const applyFilters = () => {
    let filtered = [...data];

    // Filter by type
    if (type !== "all") {
      filtered = filtered.filter((i) => i.type === type);
    }

    // Filter by source
    if (source !== "all") {
      filtered = filtered.filter((i) => i.source === source);
    }

    // Search by value
    if (search.trim() !== "") {
      filtered = filtered.filter((i) =>
        i.value.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sorting
    if (sort === "latest") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
    } else if (sort === "alphabetical") {
      filtered = filtered.sort((a, b) => a.value.localeCompare(b.value));
    }

    onFilter(filtered);
  };

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6 bg-gray-800 p-4 rounded-lg text-white">
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by value..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 rounded bg-gray-900 border border-gray-700 flex-1 min-w-[200px] text-white"
      />

      {/* Type Filter */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 rounded bg-gray-900 border border-gray-300 text-white"
      >
        <option value="all">All Types</option>
        <option value="ip">IP</option>
        <option value="subnet">Subnet</option>
        <option value="url">URL</option>
      </select>

      {/* Source Filter */}
      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="p-2 rounded bg-gray-900 border border-gray-300 text-white"
      >
        <option value="all">All Sources</option>
        <option value="blocklist.de">Blocklist.de</option>
        <option value="spamhaus">Spamhaus</option>
        <option value="digitalside">Digitalside</option>
      </select>

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="p-2 rounded bg-gray-900 border border-gray-700 text-white"
      >
        <option value="latest">Latest First</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  );
}