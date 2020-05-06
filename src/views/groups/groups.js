import React, { useEffect, useState } from "react";
import GroupsBanner from "../../components/groupsBanner";
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
  Space,
  Alert,
} from "antd";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { StarOutlined, ProfileOutlined } from "@ant-design/icons";

const GET_ALL_GROUPS_AND_TYPES = gql`
  {
    allGroups {
      id_group
      name
      id_type
      type
      description
      followers
      photo
    }
    groupTypes {
      id_type
      name
    }
  }
`;

const { Title } = Typography;

var pickedCategory = 0;
var searchedGroups = [];

const Groups = () => {
  const handleChange = (selectedOption) => {
    pickedCategory = selectedOption;
    console.log(`Option selected:`, pickedCategory);
  };
  const onFinish = async (values) => {
    console.log(
      "se eligió la categoría ",
      pickedCategory,
      ", se eligió el nombre ",
      values.search
    );
    searchedGroups = [];
    for (var i = 0; i < data.allGroups.length; i++) {
      if (pickedCategory == 0) {
        if (typeof values.search === "undefined" || values.search == "") {
          searchedGroups.push(data.allGroups[i]);
        } else {
          if (containsSubStrings(data.allGroups[i].name, values.search)) {
            searchedGroups.push(data.allGroups[i]);
          }
        }
      } else {
        if (data.allGroups[i].id_type == pickedCategory) {
          if (typeof values.search === "undefined" || values.search == "") {
            searchedGroups.push(data.allGroups[i]);
          } else {
            if (containsSubStrings(data.allGroups[i].name, values.search)) {
              searchedGroups.push(data.allGroups[i]);
            }
          }
        }
      }
    }
    changeGroupList(searchedGroups);
    console.log("datos", groupList);
  };

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const [groupList, changeGroupList] = useState(searchedGroups);
  const { loading, error, data } = useQuery(GET_ALL_GROUPS_AND_TYPES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  var categories = [];
  categories.push({ value: 0, label: "Ninguno" });
  data.groupTypes.forEach((element) => {
    categories.push({ value: element.id_type, label: element.name });
  });
  return (
    <React.Fragment>
      <GroupsBanner />
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
                label="Buscar"
                name="search"
                rules={[]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8} style={{ margin: " 0" }}>
              <Select
                placeholder="Categorias"
                style={{ width: "50%", margin: "0 5%" }}
                options={categories}
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
            <Title level={2}>Busqueda de Grupos</Title>
          </div>
          <Row>
            <div className="commentsBox">
              <List
                header={<div className="header">Grupos</div>}
                itemLayout="vertical"
                size="medium"
                width="100%"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 5,
                }}
                dataSource={groupList}
                renderItem={(item) => (
                  <List.Item
                    key={item.name}
                    actions={[
                      <IconText
                        icon={StarOutlined}
                        text={item.followers}
                        key="list-vertical-star-o"
                      />,
                    ]}
                    //imagen del grupo
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        // src={item.photo}
                      />
                    }
                  >
                    <List.Item.Meta
                      title={
                        <Link to={"/groupProfile/" + item.id_group}>
                          {item.name}
                        </Link>
                      }
                      description={item.type}
                    />
                    {item.description}
                  </List.Item>
                )}
              />
            </div>
          </Row>
        </ContentLayout>
      </div>
    </React.Fragment>
  );
};

export default Groups;
