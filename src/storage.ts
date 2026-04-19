import fs from 'fs/promises';
import { LogEntry } from './types';

const FILE = 'data/logs.json';

export const readLogs = async (): Promise<LogEntry[]> => {
  try {
    const raw = await fs.readFile(FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const writeLogs = async (logs: LogEntry[]): Promise<void> => {
  await fs.writeFile(FILE, JSON.stringify(logs, null, 2));
};
