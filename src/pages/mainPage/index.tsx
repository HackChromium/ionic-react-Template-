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
} from "@ionic/react";
import GoogleMapReact from "google-map-react";
import LocationPin from "../../components/LocationPin";
import "./map.css";

const MainPage = (props: any) => {
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
								lat={props.point.lat}
								lng={props.point.lng}
								text="This just a sample address"
							/>
						</GoogleMapReact>
					</div>
					<IonFab horizontal="end" vertical="bottom" slot="fixed">
						<IonFabButton>
							<IonIcon name="add-outline" />
						</IonFabButton>
					</IonFab>
				</IonContent>
			</IonPage>
		</>
	);
};

export default MainPage;
