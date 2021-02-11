import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonFab, IonFabButton, IonIcon } from '@ionic/react';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

const Test = () => {
    //getting the geolocation
    const getCurrentPosition= async() =>{
        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current', coordinates);
      }
    //This thing calls the above function
      useEffect(()=>{
          getCurrentPosition()},[] //since the second parameter is empty it is called only once
      ) 

  return (
    <IonPage>
      
      
        
    </IonPage>
  );
};

export default Test;
