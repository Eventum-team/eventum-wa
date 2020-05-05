import React from "react";
import GroupCard from "../../components/groupCard";
import GroupBanner from '../../components/groupBanner'
import AssistList from "../../components/adminList";
import EventsList from "../../components/eventList";
import ContentLayout from "../../components/contentLayout";
import { Layout } from 'antd';
import { Row, Col, Avatar } from 'antd';
import gql from 'graphql-tag';
import {useQuery} from "@apollo/react-hooks";


//GRAPHQL

const GROUP_PROFILE_QUERY = gql`
query eProfile($id: ID!){
  groupProfile(id: $id) {
    type
    name
    description
    created_date
    contact_number
    followers
    events{
      id
      status
      name
      description
      photo
    }
    admins{
      id
      name
    }
    photo
  }
}
`;

const GroupProfile = (props) => {
  const {id} = props.match.params;
  console.log("iden ", id);
  const { loading, error, data } = useQuery(GROUP_PROFILE_QUERY, {
    variables: {
      id: id,
    }
  });

  if (loading) {return 'Loading...';}
  if (error) {return `Error! ${error.message}`;}

  var aList = data.groupProfile.admins;

  var grPhoto = "https://source.unsplash.com/random"
  if (!loading){
    if(data.groupProfile.photo!=null){
      grPhoto = data.groupProfile.photo;
    }
  }

  return(
    <div>
      <React.Fragment>
        <GroupBanner name= {data.groupProfile.name} photo={grPhoto}/>
        <ContentLayout>
          <Row>
            <GroupCard type={data.groupProfile.type} name={data.groupProfile.name} description={data.groupProfile.description} created_date={data.groupProfile.created_date} contact_number={data.groupProfile.contact_number} followers={data.groupProfile.followers}></GroupCard>
          </Row>
          <Row>
            <Col flex={10}>
              <EventsList data={data.groupProfile.events}/>
            </Col>
            <Col flex={2}>
              <AssistList data={aList}/>
            </Col>
          </Row>
        </ContentLayout>
      </React.Fragment>
    </div>

  );
}

export default GroupProfile;
