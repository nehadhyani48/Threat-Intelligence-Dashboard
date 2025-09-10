import { IOC } from "../type/ioc";

interface Props {
  data: IOC[];
}

export default function IOCTable({ data }: Props) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-700 text-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3 text-left">Value</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Source</th>
            <th className="p-3 text-left">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ioc, idx) => (
            <tr key={idx} className="border-b border-gray-700 text-white">
              <td className="p-3">{ioc.value}</td>
              <td className="p-3">{ioc.type}</td>
              <td className="p-3">{ioc.source}</td>
              <td className="p-3">{new Date(ioc.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}