import cron from "node-cron";

export const stopschedule = async (): Promise<void> => {
  for (const task of cron.getTasks().values()) {
    task.stop();
  }
};
