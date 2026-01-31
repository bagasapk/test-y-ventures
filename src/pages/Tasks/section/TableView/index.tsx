import { PlusOutlined } from "@ant-design/icons";
import { Button, Table, Tabs } from "antd";
import { TASK_STATUS_OPTIONS } from "../../../../constants/config";
import useTasks from "../../hooks/useTasks";
import type { TaskStatus } from "../../../../types/tasks.type";

const TableView = () => {
  const {
    columns,
    filteredDataSource,
    handleOpenAdd,
    handleChangeFilterStatus,
  } = useTasks();

  return (
    <div className="px-4">
      <div className="flex justify-between mb-4">
        <Tabs
          items={TASK_STATUS_OPTIONS}
          onChange={(v) => handleChangeFilterStatus(v as TaskStatus)}
        />
        <Button
          onClick={() => handleOpenAdd()}
          type="primary"
          icon={<PlusOutlined />}
          style={{ fontWeight: 500 }}
        >
          Create Task
        </Button>
      </div>
      <Table
        bordered
        size="small"
        columns={columns}
        dataSource={filteredDataSource}
      />
    </div>
  );
};

export default TableView;
