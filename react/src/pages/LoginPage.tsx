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
  IonNote,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonText,
  IonTextarea,
  IonButtons,
  IonMenuButton} from '@ionic/react';
import './css/Login.css';

const Index: React.FC = () => {
  return (
    <IonPage>
      <IonHeader> 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton id="main-nav"></IonMenuButton>
          </IonButtons>
          <IonTitle class="ion-text-center">Psycho VR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard class="InputCard ion-justify-content-center ion-align-self-center">
          <IonCardHeader>
            <IonCardTitle class="ion-text-center ion-margin-top ion-margin-bottom">Fill in code given in the application!</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonInput id="js--sessionInput" class="ion-text-center InputField" name="secretToken" required text-center placeholder="Enter code" type="number"></IonInput>
            <IonText color="danger">
              <h2 id="js--errorText" className="ErrorText"></h2>
            </IonText>
            <IonButton id="js--submitButton" class="SubmitButton">Log in</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Index;
