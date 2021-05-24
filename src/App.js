import React, { useState } from 'react';
import Title from './comps/Titre';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import {EmailShareButton,FacebookMessengerShareButton,PinterestShareButton,TwitterShareButton } from 'react-share';
import {EmailIcon, FacebookMessengerIcon,PinterestIcon, TwitterIcon, } from 'react-share';



function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (

    <div className="App">
      <container> <segment>
      <EmailShareButton url="">
        <EmailIcon logoFillColor="white" round={true}></EmailIcon>
      </EmailShareButton> 
     
  </segment> </container>

      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>





  );
}

export default App;
