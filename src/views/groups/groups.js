import React, { useEffect, useState } from "react";
import GroupsBanner from '../../components/groupsBanner'
import ContentLayout from "../../components/contentLayout";
import { Layout } from 'antd';
import { Form,
    Input,
    Row,
    Col,
    Select,
    Button,
    Typography,
    List, Avatar, Space, 
    Alert} from 'antd';
import gql from 'graphql-tag';
import {  useQuery } from "@apollo/react-hooks";
import { MessageOutlined, LikeOutlined, StarOutlined ,DislikeOutlined } from '@ant-design/icons';

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

const Groups = () =>{

    function containsSubStrings(container, contained){
        var splitted = contained.split(" ");
        var contains = true;
        for(var index = 0; index < splitted.length; index++){
            if(!container.includes(splitted[index])){
                contains = false;
                break;
            }
        }
        return contains;
    }

    const handleChange = (selectedOption) => {
        pickedCategory = selectedOption;
        console.log(`Option selected:`, pickedCategory);
    }
    const onFinish = async (values) => {
        console.log("se eligió la categoría ", pickedCategory, ", se eligió el nombre ", values.search);
        searchedGroups = [];
        for(var i = 0; i < data.allGroups.length; i++){
            if(pickedCategory == 0){
                if(typeof values.search === "undefined" || values.search == ""){
                    searchedGroups.push(data.allGroups[i]);
                }else{
                    if(containsSubStrings(data.allGroups[i].name, values.search)){
                        searchedGroups.push(data.allGroups[i]);
                    }
                }
            }else{
                if(data.allGroups[i].id_type == pickedCategory){
                    if(typeof values.search === "undefined" || values.search == ""){
                        searchedGroups.push(data.allGroups[i]);
                    }else{
                        if(containsSubStrings(data.allGroups[i].name, values.search)){
                            searchedGroups.push(data.allGroups[i]);
                        }
                    }
                }
            }
        }
        changeGroupList(searchedGroups);
        console.log("datos", groupList);
    }

    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
      );
    const [groupList, changeGroupList] = useState(searchedGroups);
    const { loading, error, data } = useQuery(GET_ALL_GROUPS_AND_TYPES);
    
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

    //searchedGroups = data.allGroups;

    var categories = [];
    categories.push({value: 0, label: "Ninguno"});
    data.groupTypes.forEach(element => {
        categories.push({value: element.id_type, label: element.name});
    });
    return (
        <React.Fragment>
          <GroupsBanner/>
          <div>
            <ContentLayout>
                <Row>
                <Form onFinish={onFinish}>
                    <div className="center-text">
                        <Title level={2}>Buscar Grupo</Title>
                    </div>
                    <Col>
                    <Form.Item
                        labelAlign="left"
                        label="Search"
                        name="search"
                        rules={[
                        ]}
                        >
                        <Input />
                    </Form.Item>
                    
                    Elige una categoría
                    <Select 
                        options={categories}
                        onChange={handleChange}
                    />

                    <Button type="primary" htmlType="submit">Buscar</Button>
                    </Col>
                </Form>
                </Row>
                <Row>
                <div className="commentsBox">
                    <List
                    header={<div className="header">Grupos</div>}
                    itemLayout="vertical"
                    size="medium"
                    width= "100%"
                    pagination={{
                        onChange: page => {
                        console.log(page);
                        },
                        pageSize: 5,
                    }}
                    dataSource={groupList}

                    renderItem={item => (
                        <List.Item
                        key={item.name}
                        actions={[
                            <IconText icon={StarOutlined} text={item.followers} key="list-vertical-star-o" />,
                        ]}
                        //imagen del grupo
                        extra={
                            <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            //src=item.photo
                            />
                        }
                        >
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="/groupProfile">{item.name}</a>}
                            description={item.type}
                        />
                        {item.description}
                        </List.Item>
                    )}/>
                    </div>
                </Row>
            </ContentLayout>
          </div>
        </React.Fragment>
      );
}

export default Groups;