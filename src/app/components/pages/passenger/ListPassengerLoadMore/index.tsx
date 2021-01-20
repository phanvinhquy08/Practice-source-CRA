import React from "react";
import { List, Skeleton, Avatar, Card } from "antd";

import useConnect from "./useConnect";
import LoadMoreButton from "./LoadMoreButton";

const PassengerLoadMore: React.FC = () => {
  const {
    listPassenger,
    initLoading,
    handleLoadMore,
    isLoadMore,
  } = useConnect();

  return (
    <Card>
      <List
        loading={initLoading}
        itemLayout='horizontal'
        loadMore={
          !initLoading &&
          !isLoadMore && <LoadMoreButton handleLoadMore={handleLoadMore} />
        }
        dataSource={listPassenger}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key='list-loadmore-edit'>edit</a>,
              <a key='list-loadmore-more'>more</a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                }
                title={<a href='https://ant.design'>{item.name}</a>}
                description={item.trips}
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default PassengerLoadMore;
