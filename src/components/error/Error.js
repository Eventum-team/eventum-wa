import React from "react";
import { Alert, Result } from "antd";

const Spinner = props => {
  return (
    <Result
      status="warning"
      title={`Hay algunos problems: " ${props.error}`}
      // extra={
      //   <Button type="primary" key="console">
      //     Go Console
      //   </Button>
      // }
    />
    // <Alert
    //   message="Error"
    //   description={props.error}
    //   type="error"
    //   showIcon
    // />
  );
};

export default Spinner;
