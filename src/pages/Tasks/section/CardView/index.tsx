import Loader from "@/components/Loader";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Tag } from "antd";
import {
  STRING,
  TASK_CATEGORY_OPTIONS,
  TASK_STATUS,
} from "../../../../constants/config";
import {
  handleColorCategory,
  handleColorStatus,
} from "../../../../helper/color.helper";
import useTasks from "../../hooks/useTasks";

const CardView = () => {
  const { filteredDataSource, handleOpenAdd, handleNull, renderAction } =
    useTasks();

  return (
    <div className="px-4 grid grid-cols-3 gap-8">
      {TASK_STATUS.filter((status) => status !== STRING.all).map((status) => {
        const filteredByStatus = filteredDataSource.filter(
          (d) => d.status === status,
        );
        return (
          <div
            className={
              "p-4 rounded-lg " + handleColorStatus(status)?.background
            }
          >
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-lg">{status}</p>
              <Button
                icon={<PlusOutlined />}
                type="text"
                onClick={() => handleOpenAdd(status)}
              />
            </div>
            <Loader isEmpty={!filteredByStatus.length}>
              {filteredByStatus.map((data) => (
                <Card
                  className="shadow-lg"
                  style={{ marginBottom: 16 }}
                  size="small"
                  title={
                    <div className="flex gap-2">
                      <p>{data.title}</p>
                      <Tag
                        style={{ borderRadius: 999 }}
                        color={handleColorStatus(status).color}
                      >
                        {data.status}
                      </Tag>
                      <Tag
                        style={{ borderRadius: 999 }}
                        color={handleColorCategory(data.category).color}
                      >
                        {handleNull(
                          TASK_CATEGORY_OPTIONS.find(
                            (opt) => opt.value === data.category,
                          )?.label,
                        )}
                      </Tag>
                    </div>
                  }
                  extra={handleNull(data.dueDate, "No Due Date")}
                  actions={renderAction(data.status === STRING.done, data.id)}
                >
                  {handleNull(data.description, "No Description")}
                </Card>
              ))}
            </Loader>
          </div>
        );
      })}
    </div>
  );
};

export default CardView;
