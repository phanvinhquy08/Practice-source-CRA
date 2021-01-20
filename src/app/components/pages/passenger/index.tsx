import React from "react";
import { Row, Col } from "antd";

import ListPassengerLoadMore from "./ListPassengerLoadMore";

const Passenger: React.FC = () => {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <ListPassengerLoadMore />
      </Col>
    </Row>
  );
};

export default Passenger;
