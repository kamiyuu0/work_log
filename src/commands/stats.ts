import { readLogs } from '../storage';

export const statsLogs = async (week: boolean): Promise<void> => {
  let logs = await readLogs();
  if (week) {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    logs = logs.filter((l) => new Date(l.createdAt) >= weekAgo);
  }
  console.log(`ログ件数: ${logs.length}`);
};
