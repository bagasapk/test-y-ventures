import { CloseCircleFilled } from "@ant-design/icons";
import { Alert, Empty, Spin } from "antd";
import { type PropsWithChildren } from "react";

const Loader = ({
  isEmpty,
  isLoading,
  children,
  emptyClassname,
  isError,
  errorClassname,
  error,
}: PropsWithChildren<{
  isLoading?: boolean;
  isEmpty?: boolean;
  isError?: boolean;
  emptyClassname?: string;
  errorClassname?: string;
  error?: string;
}>) => {
  if (isLoading) return <Spin fullscreen />;
  if (isError)
    return (
      <Alert
        className={errorClassname}
        title={"Error : " + error}
        type="error"
        icon={<CloseCircleFilled />}
        
      />
    );
  if (isEmpty)
    return (
      <Empty className={emptyClassname} image={Empty.PRESENTED_IMAGE_SIMPLE} />
    );
  return children;
};

export default Loader;
