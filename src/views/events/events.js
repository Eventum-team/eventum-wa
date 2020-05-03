import React from "react";
import EventsBanner from '../../components/eventsBanner'
import { Layout } from 'antd';
import { Row, Col, Avatar } from 'antd';
//import gql from 'graphql-tag';
//import {  useQuery } from "@apollo/react-hooks";

const Events = () =>{
    return (
        <React.Fragment>
          <EventsBanner/>
        </React.Fragment>
      );
}

export default Events;