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
       
      <div><img src="../images/fondde.png" class="Banner"></img>

      </div>
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}

<container> <segment>
      <EmailShareButton url="http://localhost:3000/">
        <EmailIcon logoFillColor="white" round={true}></EmailIcon>
      </EmailShareButton> 
      <FacebookMessengerShareButton url="http://localhost:3000/">
        <FacebookMessengerIcon logoFillColor="white" round={true}></FacebookMessengerIcon>
      </FacebookMessengerShareButton> 
      <PinterestShareButton url="http://localhost:3000/">
        <PinterestIcon logoFillColor="white" round={true}></PinterestIcon>
      </PinterestShareButton> 
      <TwitterShareButton url="http://localhost:3000/">
        <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
      </TwitterShareButton> 

  </segment> </container>

    </div>





  );
}

export default App;
