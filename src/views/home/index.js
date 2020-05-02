import React from "react";
import gql from 'graphql-tag';
import {  useMutation, useQuery } from "@apollo/react-hooks";


/************** 
 *  Home view
 * 
 */
/*
const GET_EVENTS = gql`
query {
  events{
    id
    name
    description
    url
    photo
  }
}
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);
  if (loading) return <h1>Loading ...</h1>;

  console.log(data);
  return <h1>Hello!!!!</h1>;
};

*/








/************** 
 *  Event Profile view
 * 
 */

const GET_EVENT_PROFILE = gql`
query getEventProfile($eventId: ID!, $userId: ID!) {
  eventProfile(eventId: $eventId, userId:$userId){
    name
    description
    latitude
    longitude
    comments {
      text
      likes
      dislikes
      name
    }
    assistant{
      name
    }
  }
}
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_EVENT_PROFILE, {
    variables: {
      eventId: parseInt(9),
      userId: parseInt(4),
    }
  });
  if (loading) return <h1>Loading ...</h1>;

  console.log(data);
  return <h1>Hello!!!!</h1>;
};



/************** 
 *  User Profile view
 * 
 */
/*
const GET_USER_PROFILE = gql`
query getUserProfile($userId: Int!) {
  userProfile(userId: $userId){
    id
    name
    career
    age
    phone_number
    groupsFollowing{
      id_group
      id_type
      type
      name
      description
    }
    eventsCreated {
      id
      name
      description
    }
  }
}
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_USER_PROFILE, {
    variables: {
      userId: parseInt(4),
    }
  });
  if (loading) return <h1>Loading ...</h1>;

  console.log(data);
  return <h1>Hello!!!!</h1>;
};

*/








export default Home;
