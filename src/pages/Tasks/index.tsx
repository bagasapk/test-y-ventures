import { Tabs } from "antd";
import { TASK_VIEWS } from "./constants/config";
import useTasks from "./hooks/useTasks";
import ModalAddTask from "./section/ModalAddTask";

const Tasks = () => {
  const {
    open,
    handleCloseAdd,
    handleCreateTask,
  } = useTasks();

  return (
    <div className="w-full">
      <Tabs items={TASK_VIEWS} type="card" />
      <ModalAddTask
        onCreateTask={handleCreateTask}
        open={open}
        onCancel={handleCloseAdd}
      />
    </div>
  );
};

export default Tasks;
