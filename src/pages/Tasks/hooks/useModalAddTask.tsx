import type { DatePickerProps } from "antd";
import dayjs from "dayjs";
import { useAppSelector } from "../../../hooks/hooks";

const useModalAddTask = () => {
  const inititalStatus = useAppSelector((s) => s.task.form.status);
  const handleDisableDate: DatePickerProps["disabledDate"] = (date) => {
    return !date.isAfter(dayjs().startOf("day"));
  };

  return { handleDisableDate, inititalStatus };
};

export default useModalAddTask;
