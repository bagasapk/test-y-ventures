import type { TagProps } from "antd";
import type { TaskCategory, TaskStatus } from "../types/tasks.type";

export const handleColorStatus = (
  status: TaskStatus,
): { background: string; color: TagProps["color"] } => {
  switch (status) {
    case "Pending":
      return {
        background: "bg-orange-100",
        color: "orange-inverse",
      };
    case "Completed":
      return {
        background: "bg-green-100",
        color: "green-inverse",
      };
    case "All":
      return {
        background: "",
        color: "default",
      };
  }
};

export const handleColorCategory = (
  status: TaskCategory,
): { background: string; color: TagProps["color"] } => {
  switch (status) {
    case "personal":
      return {
        background: "bg-orange-100",
        color: "cyan-inverse",
      };
    case "work":
      return {
        background: "bg-green-100",
        color: "blue-inverse",
      };
  }
};
