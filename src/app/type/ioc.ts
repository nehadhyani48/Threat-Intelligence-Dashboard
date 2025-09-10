export type IOCType = "ip" | "subnet" | "url";

export interface IOC {
  value: string;
  type: IOCType;
  source: "blocklist.de" | "spamhaus" | "digitalside";
  timestamp: string;
}