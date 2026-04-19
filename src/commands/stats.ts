import { readLogs } from '../storage';

export const statsLogs = (week: boolean): void => {
  let logs = readLogs();
  if (week) {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    logs = logs.filter((l) => new Date(l.createdAt) >= weekAgo);
  }
  console.log(`ログ件数: ${logs.length}`);
};
