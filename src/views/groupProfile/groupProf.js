/*import React from "react";
import HomeBanner from '../../components/homeBanner'
import HomeEvents from '../../components/homeEvents'
import { Layout } from 'antd';
import ContentLayout from "../../components/contentLayout";
import { Row, Col, Avatar } from 'antd';
import Spinner from "../../components/spinner";
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';
import { ConfigContext } from "antd/lib/config-provider";

const { Header, Footer, Sider, Content } = Layout;

const GET_EVENTS = gql`
    query EventsByGroup($id_group: ID!) {
        eventsByGroup(id_group: $id_group) {
            id
            name
            description
            url
            photo
        }
    }
`;

function GroupProfile ({ group_id }){
    //obtener eventos del grupo
    const [getEvents, { loading, data }] = useLazyQuery(GET_EVENTS, {
        onCompleted: (data) => {
            context.getEvents(
                data.getEvents.id,
                data.getEvents.name,
                data.getEvents.description,
                data.getEvents.url,
                data.getEvents.photo
            )
        },
        onerror: (error) => {
            return `Error! ${error}`;
        },
    });
    console.log(data);
    const evList = [];

    if (loading) return null;
  
    if (!loading){
      for (let i = 0; i < data.events.length; i++) {
        evList.push({
          href: data.events[i].url,
          name: data.events[i].name,
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          picture: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
          description: data.events[i].description,
        });
      }
    }
  
    return (
      <React.Fragment>
        <HomeBanner/>
        <div>
          {loading && <Spinner />}
          {!loading && (
            <ContentLayout>
              <HomeEvents data={evList} />
            </ContentLayout>
          )}
        </div>
      </React.Fragment>
    );
  };
  
  export default GroupProfile;*/
  