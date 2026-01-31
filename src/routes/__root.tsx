import { MENU_ITEM } from "@/constants/config";
import useLayout from "@/hooks/useLayout";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content } = Layout;

const RootLayout = () => {
  const { selectedKeys, handleSelectMenu, breadcrumbItem } = useLayout();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "white",
          gap: 25,
        }}
      >
        <p style={{ fontSize: 24, fontWeight: "semibold" }}>Bagasapk</p>
        <Menu
          mode="horizontal"
          selectedKeys={selectedKeys}
          items={MENU_ITEM}
          onSelect={handleSelectMenu}
          style={{ flex: 1, minWidth: 0, fontWeight: 500 }}
        />
      </Header>
      <Content style={{ padding: "0 48px", minHeight: "100vh" }}>
        <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItem} />
        <div
          className="bg-white rounded"
          style={{
            minHeight: 500,
            padding: 24,
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export const Route = createRootRoute({ component: RootLayout });
