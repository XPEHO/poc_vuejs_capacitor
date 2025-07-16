export interface Reminder {
  id: number;
  title: string;
  datetime: string;
  repeatMode: "minutely" | "daily" | "weekly" | "monthly" | "yearly" | "none";
}

export interface NewReminder {
  title: string;
  datetime: string;
  repeatMode: "minutely" | "daily" | "weekly" | "monthly" | "yearly" | "none";
}

export type RepeatMode = "minutely" | "daily" | "weekly" | "monthly" | "yearly" | "none";
