import { Command } from 'commander';
import { addLog } from './commands/add';
import { listLogs } from './commands/list';
import { statsLogs } from './commands/stats';

const program = new Command();

program.command('add <message>').action((message) => addLog(message));

program
  .command('list')
  .option('--today')
  .action((options) => listLogs(options.today));

program
  .command('stats')
  .option('--week')
  .action((options) => statsLogs(options.week));

program.parse();
