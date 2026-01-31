import { MENU_ITEM } from "@/constants/config";
import { ROUTES } from "@/constants/routes";
import { capitalizeFirst } from "@/helper/string.helper";
import { useLocation, useNavigate } from "@tanstack/react-router";
import type { BreadcrumbProps, MenuProps } from "antd";

const useLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedKeys = [
    MENU_ITEM.find((item) => item.key === location.pathname)?.key.toString() ||
      ROUTES.tasks,
  ];

  const breadcrumbItem: BreadcrumbProps["items"] = [
    { title: "Home" },
    ...location.pathname
      .split("/")
      .filter((item) => item)
      .map((item) => ({ title: capitalizeFirst(item) })),
  ];

  const handleSelectMenu: MenuProps["onSelect"] = (info) => {
    navigate({ to: info.key });
  };

  return { selectedKeys, handleSelectMenu, location, breadcrumbItem };
};

export default useLayout;
