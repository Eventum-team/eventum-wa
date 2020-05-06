import React, { useEffect, useState } from "react";
import EventsBanner from "../../components/eventsBanner";
import ContentLayout from "../../components/contentLayout";
import containsSubStrings from "../substrings.js";
import { Layout } from "antd";
import {
  Form,
  Input,
  Row,
  Col,
  Select,
  Button,
  Typography,
  List,
  Avatar,
  Card,
  Space,
  Alert,
} from "antd";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  StarOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const GET_ALL_EVENTS = gql`
  {
    allEvents {
      id
      status
      name
      description
      photo
    }
  }
`;

const { Title } = Typography;

var pickedStatus = "";
var searchedEvents = [];
var states = [
  { value: "", label: "ninguno" },
  { value: "active", label: "activo" },
];

const Events = () => {
  const handleChange = (selectedOption) => {
    pickedStatus = selectedOption;
    console.log(`Option selected:`, pickedStatus);
  };
  const onFinish = async (values) => {
    console.log(
      "se eligió el status ",
      pickedStatus,
      ", se eligió el nombre ",
      values.search
    );
    searchedEvents = [];
    for (var i = 0; i < data.allEvents.length; i++) {
      if (pickedStatus == 0) {
        if (typeof values.search === "undefined" || values.search == "") {
          searchedEvents.push(data.allEvents[i]);
        } else {
          if (containsSubStrings(data.allEvents[i].name, values.search)) {
            searchedEvents.push(data.allEvents[i]);
          }
        }
      } else {
        if (data.allEvents[i].status == pickedStatus) {
          if (typeof values.search === "undefined" || values.search == "") {
            searchedEvents.push(data.allEvents[i]);
          } else {
            if (containsSubStrings(data.allEvents[i].name, values.search)) {
              searchedEvents.push(data.allEvents[i]);
            }
          }
        }
      }
    }
    changeEventList(searchedEvents);
    console.log("datos", eventList);
  };

  const [eventList, changeEventList] = useState(searchedEvents);
  const { loading, error, data } = useQuery(GET_ALL_EVENTS);

  if (loading) {
    return "Loading...";
  }
  if (error) {
    return `Error! ${error.message}`;
  }

  return (
    <React.Fragment>
      <EventsBanner />
      <div
        style={{
          width: "100%",
          height: 100,
          padding: "40px 10%",
          background: "#fff",
        }}
      >
        <Form onFinish={onFinish}>
          <Row>
            <Col span={16}>
              <Form.Item
                labelAlign="left"
                label="Search"
                name="search"
                rules={[]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8} style={{ margin: " 0" }}>
              <Select
                style={{ width: "50%", margin: "0 5%" }}
                options={states}
                onChange={handleChange}
              />
              <Button type="primary" style={{ width: "30%" }} htmlType="submit">
                Buscar
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <ContentLayout>
          <div className="center-text">
            <Title level={2}>Buscar Evento</Title>
          </div>
          <Row>
            <List
              style={{ width: "100%" }}
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 8,
              }}
              dataSource={eventList}
              grid={{ gutter: 10, column: 4 }}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    style={{ width: "300px" }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        //src={item.photo}
                      />
                    }
                    actions={[
                      <SettingOutlined key="setting" />,
                      <EditOutlined key="edit" />,
                      <EllipsisOutlined key="ellipsis" />,
                    ]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={
                        <Link to={"/eventProfile/" + item.id}>{item.name}</Link>
                      }
                      description={item.description}
                    />
                  </Card>
                </List.Item>
              )}
            />
          </Row>
        </ContentLayout>
      </div>
    </React.Fragment>
  );
};

export default Events;
