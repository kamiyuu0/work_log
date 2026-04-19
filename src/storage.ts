import fs from 'fs';
import { LogEntry } from './types';

const FILE = 'data/logs.json';

export const readLogs = (): LogEntry[] => {
  if (!fs.existsSync(FILE)) return [];
  const raw = fs.readFileSync(FILE, 'utf-8');
  return JSON.parse(raw);
};

export const writeLogs = (logs: LogEntry[]): void => {
  fs.writeFileSync(FILE, JSON.stringify(logs, null, 2));
};
