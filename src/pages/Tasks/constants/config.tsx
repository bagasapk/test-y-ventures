import { AppstoreOutlined, TableOutlined } from "@ant-design/icons";
import { Button, type TabsProps } from "antd";
import TableView from "../section/TableView";
import CardView from "../section/CardView";

export const TASK_VIEWS: TabsProps["items"] = [
  {
    label: (
      <Button type="text" size="small" icon={<TableOutlined />}>
        Table
      </Button>
    ),
    key: "table",
    children: <TableView />,
  },
  {
    label: (
      <Button type="text" size="small" icon={<AppstoreOutlined />}>
        Card
      </Button>
    ),
    key: "card",
    children: <CardView />,
  },
];
