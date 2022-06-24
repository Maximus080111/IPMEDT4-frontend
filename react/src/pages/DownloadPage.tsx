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
import './css/Download.css';

const Download: React.FC = () => {
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
            <IonCardTitle class="ion-text-center ion-margin-top ion-margin-bottom">Hieronder vind u de link om de apk te downloaden, voor de tutorial om de applicatie te installeren gaat u naar de tutorial pagina.</IonCardTitle>
          </IonCardHeader>
          <IonCardContent class="ion-justify-content-center ion-align-self-center ion-text-center">
            <IonButton href="https://cloud.gerrietech.com/apps/sharingpath/Admin/public/ipmedt4NoPark.apk" class="ion-text-center"><IonText class="text ion-text-center">Link naar Download</IonText></IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Download;
