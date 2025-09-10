import { IOC } from "../type/ioc";

export async function fetchIOCs(): Promise<IOC[]> {
  const res = await fetch("/iocs.json"); // ab ye public folder se file lega

  return res.json();
}
