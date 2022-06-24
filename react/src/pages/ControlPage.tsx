import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonInput, 
  IonItem,
  IonLabel, 
  IonItemOption,
  IonButton,
  IonIcon,
  IonNote,
  IonTextarea,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonText,
  IonCol} from '@ionic/react';
import './css/Control.css';
import {arrowBack} from 'ionicons/icons';

const Index: React.FC = () => {
  return (
    <IonPage>
      <IonHeader> 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <IonToolbar>
          <IonRow>
            <IonButton color="primary" href="/login">
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
            <IonTitle class="ion-text-center">Psycho VR</IonTitle>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel class="ion-text-center" id="js--sessionID"></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel class="ion-text-center" id="js--scenario"></IonLabel>
        </IonItem>
        <IonRow class="ButtonRow">
          <IonCol>
            <IonButton color="secondary" data-scenario="Inactive" class="SubmitButton js--changeScenario">Stop VR</IonButton>
          </IonCol>
        </IonRow>
        <IonCard class="js--scenarioCard">
          <IonCardHeader>
            <IonCardTitle class="ion-text-center">Scenario 1</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonText>
              <h2 id="js--errorText" className="ErrorText"></h2>
            </IonText>
            <IonButton data-scenario="Scenario 1" class="SubmitButton js--changeScenario">Set active</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard class="js--scenarioCard">
          <IonCardHeader>
            <IonCardTitle class="ion-text-center">Scenario 2</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonText>
              <h2 id="js--errorText" className="ErrorText"></h2>
            </IonText>
            <IonButton data-scenario="Scenario 2" class="SubmitButton js--changeScenario">Set active</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard id="js--scenarioStarted">
          <IonCardHeader>
            <IonCardTitle class="ion-text-center">A scenario has already been selected!</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard id="js--scenarioKill">
          <IonCardHeader>
            <IonCardTitle class="ion-text-center">The VR experience has been killed with the emergency button!</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Index;
