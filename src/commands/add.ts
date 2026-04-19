import { readLogs, writeLogs } from '../storage';
import { LogEntry } from '../types';
import { randomUUID } from 'crypto';

export const addLog = (message: string): void => {
  const logs = readLogs();
  const entry: LogEntry = {
    id: randomUUID(),
    message,
    createdAt: new Date().toISOString(),
  };
  writeLogs([...logs, entry]);
  console.log(`追加しました: ${message}`);
};
