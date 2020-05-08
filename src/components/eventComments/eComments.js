import React, { useEffect , useState} from "react";
import { Redirect } from 'react-router-dom'
import { List, Avatar, Space , Form, Input, Alert, Button} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined ,DislikeOutlined } from '@ant-design/icons';
import "./index.css";
import {useMutation} from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import gql from 'graphql-tag';
import Spinner from "../../components/spinner";
const CREATE_COMMENT_MUTATION = gql`
mutation CommentMutation(
  $idUser: Int!
  $idEvent: Int!
  $text: String!
  $name: String!
){
  addComment(input:{
			idUser: $idUser,
    	idEvent: $idEvent,
    	text: $text,
    	name: $name,
    }) {
    name
  }
}
`;


////////////////////
const EventComments = (props) => {
  const history = useHistory();
  const commentList = props.data;
  const [successful, setSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [onAsistHandler, { loading, error }] = useMutation(CREATE_COMMENT_MUTATION, { errorPolicy: 'all' })
  const [form] = Form.useForm();
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const onFinish = async values => {
    try {
      const {data} = await onAsistHandler({
        variables: {
          idUser: props.idu,
          idEvent: parseInt(props.ide),
          text: values.comment,
          name: props.name,
        }
      });
      form.resetFields();
      //setSuccessful(true);
    } catch(e){
      console.log({e});
      console.log(e.graphQLErrors); // Aqui estan los errores que mandamos, es una arreglo
      // const errorPromt = e.graphQLErrors[0].message.detail; // mensaje
      // console.log(e.graphQLErrors[0].status); // status
      // setErrorMessage(errorPromt);
    }
  }
  
  
  useEffect(() => {
    if (!loading ) {
      props.refetchProfile();
    }
  }, );


  return (
    <div className="commentsBox">
      <List
      header={<div className="header">Comentarios</div>}
      itemLayout="horizontal"
      size="small"
      width= "100%"
      dataSource={commentList}
      renderItem={item => (
        <List.Item
          key={item.name}
          actions={[
            <IconText icon={LikeOutlined} text={item.likes} key="list-vertical-like-o" />,
            <IconText icon={DislikeOutlined} text={item.dislikes} key="list-vertical-dislike-o" />,
          ]}
        >
          <List.Item.Meta
            
            title={<a href={item.href}>{item.name}</a>}
          />
          {item.text}
        </List.Item>
      )}/>
      <Form
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          name="comment"
          rules={[
            { required: true, message: "Vacío" },
          ]}
        >
          <Input
            allowClear
            placeholder="Comentario"
          />
        </Form.Item>
        <Form.Item>
          {error && (
            <Alert
              style={{ marginBottom: 20, marginTop: 20 }}
              message={error}
              type="error"
              showIcon
            />
          )}
          <div>
            {loading && <Spinner />}
            {!loading && (
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Comentar
              </Button>
            )}
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EventComments
