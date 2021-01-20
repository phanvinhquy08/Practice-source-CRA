import React, { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";

type Props = {
  handleLoadMore: () => void;
};

const LoadMoreButton: React.FC<Props> = ({ handleLoadMore }) => {
  return (
    <ButtonWrapper>
      <Button type='primary' onClick={handleLoadMore}>
        Load more
      </Button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export default LoadMoreButton;
