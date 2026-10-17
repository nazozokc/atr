import cron from "node-cron";

export const stopschedule = async (): Promise<void> => {
  const tasks = cron.getTasks();

  for (const task of tasks.values()) {
    task.stop();
  }
};
