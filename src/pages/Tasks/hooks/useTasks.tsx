import { CheckOutlined, DeleteFilled } from "@ant-design/icons";
import { Button, Popconfirm, Space, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useMemo, type ReactNode } from "react";
import { STRING, TASK_CATEGORY_OPTIONS } from "../../../constants/config";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  setFilterStatus,
  setFormStatus,
  setOpen,
  setTasks,
} from "../../../stores/task.store";
import type {
  TaskForm,
  TaskInterface,
  TaskStatus,
} from "../../../types/tasks.type";
import {
  handleColorCategory,
  handleColorStatus,
} from "../../../helper/color.helper";

const useTasks = () => {
  const open = useAppSelector((s) => s.task.isOpen);
  const tasks = useAppSelector((s) => s.task.tasks);
  const status = useAppSelector((s) => s.task.filter.status);
  const initialStatus = useAppSelector((s) => s.task.form.status);
  const dispatch = useAppDispatch();

  const handleNull = (value: any, defaultText?: string) => {
    if (!value) return defaultText || "-";
    return value;
  };

  const handleDelete = (id: number) => {
    const filtered = tasks.filter((task) => task.id !== id);
    dispatch(setTasks(filtered));
    if (!filtered.length) localStorage.removeItem(STRING.todo);
  };

  const columns: ColumnsType<TaskInterface> = [
    { title: "No", render: (_, __, idx) => `${idx + 1} .` },
    { title: "Title", dataIndex: "title", width: "20%" },
    {
      title: "Description",
      dataIndex: "description",
      width: "30%",
      render: (val) => handleNull(val),
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (val) => (
        <Tag
          style={{ borderRadius: 999 }}
          color={handleColorCategory(val).color}
        >
          {handleNull(
            TASK_CATEGORY_OPTIONS.find((opt) => opt.value === val)?.label,
          )}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (val) => (
        <Tag style={{ borderRadius: 999 }} color={handleColorStatus(val).color}>
          {val}
        </Tag>
      ),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      render: (val) => handleNull(val),
    },
    {
      title: "Action",
      width: 200,
      render: (_, record) => {
        const isDone = record.status === STRING.done;
        return (
          <Space align="center">
            {!isDone && (
              <Button
                onClick={() => handleMarkAsDone(record.id)}
                icon={<CheckOutlined />}
                color="green"
                variant="solid"
              >
                Mark as Done
              </Button>
            )}
            <Popconfirm
              title="Delete Task"
              description="Are you sure want to delete this task?"
              okButtonProps={{ danger: true }}
              onConfirm={() => handleDelete(record.id)}
            >
              <Button icon={<DeleteFilled />} danger type="primary" />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const renderAction = (isDone: boolean, id: number) => {
    let actions: ReactNode[] = [];

    if (!isDone)
      actions = [
        <Button
          onClick={() => handleMarkAsDone(id)}
          icon={<CheckOutlined />}
          type="text"
        ></Button>,
      ];

    actions = [
      ...actions,
      <Popconfirm
        onConfirm={() => handleDelete(id)}
        title="Delete Task"
        description="Are you sure want to delete this task?"
        okButtonProps={{ danger: true }}
      >
        <Button icon={<DeleteFilled />} danger type="text" />
      </Popconfirm>,
    ];

    return actions;
  };

  const handleMarkAsDone = (id: number) => {
    const changedId = tasks.map((task) =>
      task.id === id ? { ...task, status: STRING.done } : task,
    );
    dispatch(setTasks(changedId));
  };

  const handleOpenAdd = (status?: TaskStatus) => {
    dispatch(setOpen(true));
    dispatch(setFormStatus(status));
  };

  const handleCloseAdd = () => {
    dispatch(setOpen(false));
  };

  const handleCreateTask = (values: TaskForm) => {
    const newTasks: TaskInterface = {
      ...values,
      id: tasks.length,
      status: initialStatus || STRING.todo,
      dueDate: values.dueDate ? values.dueDate.format("DD/MM/YYYY") : undefined,
    };
    dispatch(setTasks([...tasks, newTasks]));
    handleCloseAdd();
  };

  useEffect(() => {
    if (!tasks.length) return;
    localStorage.setItem(STRING.todo, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = localStorage.getItem(STRING.todo);
    if (!tasks) return;
    dispatch(setTasks(JSON.parse(tasks) || []));
  }, []);

  const handleChangeFilterStatus = (status: TaskStatus) => {
    dispatch(setFilterStatus(status));
  };

  const filteredDataSource = useMemo(() => {
    if (status === STRING.all) return tasks;
    return tasks.filter((task) => task.status === status);
  }, [tasks, status]);

  return {
    columns,
    handleOpenAdd,
    handleCloseAdd,
    open,
    handleCreateTask,
    tasks,
    handleChangeFilterStatus,
    filteredDataSource,
    handleNull,
    renderAction,
  };
};

export default useTasks;
