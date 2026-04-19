import { readLogs } from '../storage';

export const listLogs = async (today: boolean): Promise<void> => {
  let logs = await readLogs();
  if (today) {
    const todayStr = new Date().toISOString().slice(0, 10);
    logs = logs.filter((l) => l.createdAt.startsWith(todayStr));
  }
  logs.forEach((l) => console.log(`[${l.createdAt}] ${l.message}`));
};
