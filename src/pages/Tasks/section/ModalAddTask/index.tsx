import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  type ModalProps,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { STRING, TASK_CATEGORY_OPTIONS } from "../../../../constants/config";
import type { TaskForm } from "../../../../types/tasks.type";
import useModalAddTask from "../../hooks/useModalAddTask";

const ModalAddTask = ({
  onCreateTask,
  ...props
}: ModalProps & { onCreateTask: (values: TaskForm) => void }) => {
  const [form] = useForm<TaskForm>();
  const { handleDisableDate, inititalStatus } = useModalAddTask();

  return (
    <Modal
      title={"Add Task " + (inititalStatus || "")}
      footer={null}
      {...props}
    >
      <Form<TaskForm>
        onFinish={onCreateTask}
        form={form}
        labelCol={{ span: 4 }}
        layout="vertical"
      >
        <Form.Item
          label="Title"
          name={"title"}
          rules={[{ required: true, message: "Required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={"description"} label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          initialValue={STRING.work}
          name={"category"}
          label="Category"
        >
          <Select defaultValue={STRING.work} options={TASK_CATEGORY_OPTIONS} />
        </Form.Item>
        <Form.Item name={"dueDate"} label="Due Date">
          <DatePicker disabledDate={handleDisableDate} />
        </Form.Item>
        <div className="flex gap-2 justify-end">
          <Button>Cancel</Button>
          <Button htmlType="submit" type="primary">
            Add
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalAddTask;
