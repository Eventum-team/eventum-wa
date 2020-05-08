import React, { useState } from "react";
import "./index.css";
import { List, message, Avatar, Spin } from "antd";
import reqwest from "reqwest";
import InfiniteScroll from "react-infinite-scroller";

import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

const AssistList = (props) => {

  const data = props.data
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (data.length > 14) {
      setLoading(false);
      setHasMore(false);
      return;
    }
  };

  return (
    <div className="demo-infinite-container">
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={false}
      >
        <List
          header={<div className="header">Asistentes</div>}
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<Link to={item.href}>{item.name}</Link>}
              />
            </List.Item>
          )}
        >
          {loading && hasMore && (
            <div className="demo-loading-container">
              <Spin />
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
  );
}

export default AssistList;
