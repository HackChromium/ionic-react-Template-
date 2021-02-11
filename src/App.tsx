<<<<<<< HEAD
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Test from './pages/Test'
=======
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

>>>>>>> 8e2c0e189a93c2fe23a2aa15e0ea8d305024fdea
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import MainPage from "./pages/mainPage";

const App: React.FC = () => (
<<<<<<< HEAD
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path='/test' component={Test} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
=======
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Route exact path="/main">
					<MainPage />
				</Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
>>>>>>> 8e2c0e189a93c2fe23a2aa15e0ea8d305024fdea
);

export default App;
