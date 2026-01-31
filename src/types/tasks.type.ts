import type { Dayjs } from "dayjs";
import type { TASK_CATEGORY, TASK_STATUS } from "../constants/config";

export interface TaskInterface {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate?: string;
  category: TaskCategory;
}

export type TaskForm = Omit<TaskInterface, "id" | "dueDate" | "status"> & {
  dueDate?: Dayjs;
};

export type TaskStatus = (typeof TASK_STATUS)[number];
export type TaskCategory = (typeof TASK_CATEGORY)[number];
