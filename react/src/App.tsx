import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { cloudDownloadOutline, ellipse, homeOutline, logInOutline, logoYoutube, square, triangle } from 'ionicons/icons';
import Login from './pages/LoginPage';
import Controls from './pages/ControlPage';
import Download from './pages/DownloadPage';
import Tutorial from './pages/TutorialPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './pages/main';
import './pages/main.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonMenu side="start" content-id="main-nav">
      <IonHeader>
        <IonToolbar color="primary" class="header">
          <IonTitle class="ion-text-center">Menu</IonTitle>
        </IonToolbar>
        <IonItem href="/login">
          <IonIcon slot="start" icon={homeOutline}></IonIcon>
          <IonText class="navText">Home</IonText>
        </IonItem>
        <IonItem href="/tutorial">
          <IonIcon slot="start" icon={logoYoutube}></IonIcon>
          <IonText class="navText">Tutorial</IonText>
        </IonItem>
        <IonItem id="js--loginButton" href="/Download">
          <IonIcon id="js--loginIcon" slot="start" icon={cloudDownloadOutline}></IonIcon>
          <IonText id="js--loginText" class="navText">Download</IonText>
        </IonItem>
      </IonHeader>
    </IonMenu>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tutorial">
            <Tutorial />
          </Route>
          <Route exact path="/download">
            <Download />
          </Route>
          <Route path="/controls">
            <Controls />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

