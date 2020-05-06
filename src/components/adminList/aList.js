import React from "react";
import "./index.css";
import { List, message, Avatar, Spin } from "antd";
import reqwest from "reqwest";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";

class AssistList extends React.Component {
  state = {
    data: this.props.data,
    loading: false,
    hasMore: true,
  };

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  render() {
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            header={<div className="header">Administradores</div>}
            dataSource={this.state.data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.photo} />}
                  title={<Link to={item.href}>{item.name}</Link>}
                />
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

export default AssistList;
