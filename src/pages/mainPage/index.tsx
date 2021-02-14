import {
	IonButtons,
	IonContent,
	IonFab,
	IonFabButton,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonMenu,
	IonMenuButton,
	IonPage,
	IonSearchbar,
	IonToolbar,
	IonFabList,
} from "@ionic/react";
import * as React from 'react';
import { useState, useEffect } from 'react';
import GoogleMapReact from "google-map-react";
import LocationPin from "../../components/LocationPin";
import { Plugins } from '@capacitor/core';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import { logoNpm, logoGithub, logoJavascript } from 'ionicons/icons';
import "./map.css";
const config= require('./config')
const { Geolocation } = Plugins;
const MainPage = (props: any) => {

	const [latitude, setlati] = useState(0);
	const [longitude, setlongi] = useState(0);
	//getting the geolocation
	const getCurrentPosition = async () => {
		const coordinates = await Geolocation.getCurrentPosition();
		console.log('Current', coordinates);

	const[latitude,setlati]=useState(0);
	const[longitude,setlongi]=useState(0);
	 //getting the geolocation
	 const getCurrentPosition= async() =>{
		const resutarunt = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=Resturant&key=${config.GOOGLE_API_KEY}`)
        const coordinates = await Geolocation.getCurrentPosition();
		console.log(resutarunt)
        console.log('Current', coordinates);

		setlati(coordinates.coords.latitude);
		setlongi(coordinates.coords.longitude);
	}
	useEffect(() => {
		getCurrentPosition()
	}, [] //since the second parameter is empty it is called only once
	)

	return (
		<>
			<IonMenu side="start" contentId="main-content">
				<IonHeader>
					<IonToolbar></IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList>
						<IonItem slot="start">
							<IonLabel>Hi</IonLabel>
						</IonItem>
						<IonItem slot="start">
							<IonLabel>Hi</IonLabel>
						</IonItem>
					</IonList>
				</IonContent>
			</IonMenu>
			<IonPage id="main-content">
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton />
						</IonButtons>
						<IonSearchbar />
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<div style={{ height: "100vh", width: "100%" }}>
						<GoogleMapReact
							defaultCenter={props.point}
							defaultZoom={11}
							bootstrapURLKeys={{
								key: "AIzaSyBT36lS0WRB6ogD2PAFCIZT9UoGca8MVaY",
							}}>
							<LocationPin
								lat={latitude}
								lng={longitude}
								text="This is a the perfect address"
							/>
						</GoogleMapReact>
					</div>



					{/*-- fab placed in the center of the content with a list on each side --*/}
					<IonFab vertical="bottom" horizontal="end" slot="fixed">
						<IonFabButton>
							<IonIcon icon={add} />
						</IonFabButton >
						<IonFabList color="light" side="start">
							<IonFabButton><IonIcon icon={logoGithub} /></IonFabButton>
							<IonFabButton><IonIcon icon={logoNpm} /></IonFabButton>
							<IonFabButton><IonIcon icon={logoJavascript} /></IonFabButton>
						</IonFabList>
					</IonFab>




				</IonContent>
			</IonPage>
		</>
	);
};

export default MainPage;
