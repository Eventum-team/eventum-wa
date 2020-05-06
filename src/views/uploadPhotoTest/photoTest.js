import React, { useEffect , useState} from "react";
import ContentLayout from "../../components/contentLayout";
import {ipLoadImages} from '../../server'

import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    console.log("entergin function -----------------------------------------");
    
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }

    console.log(info );

    console.log("entergin other function-----------------------------------------", info.file.status);
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      console.log("ENTERfunction-----------------------------------------");
      getBase64(info.file.originFileObj, imageUrl => {
        console.log(imageUrl);
        
        this.setState({
          imageUrl,
          loading: false,
        });
      });;
    }

    
  };

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <React.Fragment>
      <ContentLayout>
      <div>
        <Upload
          name="image"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action={ipLoadImages}
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
          enctype="multipart/form-data"
        >
          {imageUrl ? <img src={imageUrl} alt="image" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
       
      </div>
      </ContentLayout>
      </React.Fragment>
      
    );
  }
}


export default Avatar;
