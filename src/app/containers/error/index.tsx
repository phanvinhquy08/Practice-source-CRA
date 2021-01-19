import React from "react";
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
    const history = useHistory();
    return (
        <Wrapper>
            <Result
                status="error"
                // title="500"
                subTitle="Sorry, something went wrong."
                extra={<Button type="primary" onClick={() => history.push('/')}>Back Home</Button>}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Error;
