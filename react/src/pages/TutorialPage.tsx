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
import './css/Tutorial.css';

const Tutorial: React.FC = () => {
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
        <IonCard class="ion-content-card ion-justify-content-center">
        <IonCardHeader>
            <IonCardTitle class="ion-text-center ion-margin-top">Hieronder staat een tutorial over hoe u de applicatie gebruikt:</IonCardTitle>
          </IonCardHeader>
          <IonCardContent class="ion-justify-content-center ion-align-self-center ion-text-center">
          </IonCardContent>
          <video width="100%" controls src="https://img.gerrietech.com/Rick%20Astley%20-%20Never%20Gonna%20Give%20You%20Up%20(Official%20Music%20Video).mp4"></video>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tutorial;
