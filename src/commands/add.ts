import { readLogs, writeLogs } from '../storage';
import { LogEntry } from '../types';
import { randomUUID } from 'crypto';

export const addLog = async (message: string): Promise<void> => {
  const logs = await readLogs();
  const entry: LogEntry = {
    id: randomUUID(),
    message,
    createdAt: new Date().toISOString(),
  };
  await writeLogs([...logs, entry]);
  console.log(`追加しました: ${message}`);
};
