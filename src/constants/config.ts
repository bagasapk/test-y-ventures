import type { MenuItemType } from "antd/es/menu/interface";
import type { DefaultOptionType } from "antd/es/select";
import { capitalizeFirst } from "../helper/string.helper";
import type { TabsProps } from "antd";
import { ROUTES } from "./routes";

export const STRING = {
  todo: "Pending" as const,
  done: "Completed" as const,
  work: "work" as const,
  personal: "personal" as const,
  all: "All" as const,
};
export const MENU_ITEM: MenuItemType[] = [
  { key: ROUTES.tasks, label: "Tasks" },
  { key: ROUTES.posts, label: "Posts" },
];

export const TASK_CATEGORY = [STRING.work, STRING.personal];

export const TASK_CATEGORY_OPTIONS: DefaultOptionType[] = TASK_CATEGORY.map(
  (task) => ({ label: capitalizeFirst(task), value: task }),
);

export const TASK_STATUS = [STRING.all, STRING.todo, STRING.done];
export const TASK_STATUS_OPTIONS: TabsProps["items"] = [
  ...TASK_STATUS.map((t) => ({ label: t, key: t })),
];