import { IOC } from "../type/ioc";

interface Props {
  data: IOC[];
}

export default function SummaryWidget({ data }: Props) {
  const ipCount = data.filter((i) => i.type === "ip").length;
  const subnetCount = data.filter((i) => i.type === "subnet").length;
  const urlCount = data.filter((i) => i.type === "url").length;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-gray-800 p-4 rounded-lg text-center text-white">
        <p className="text-lg font-bold">{ipCount}</p>
        <p>IPs</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-center text-white">
        <p className="text-lg font-bold">{subnetCount}</p>
        <p>Subnets</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-center text-white">
        <p className="text-lg font-bold">{urlCount}</p>
        <p>URLs</p>
      </div>
    </div>
  );
}