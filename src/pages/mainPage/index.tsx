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
