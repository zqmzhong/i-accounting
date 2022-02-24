import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

export default function Home() {
  return (
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="schedule">
          <ion-icon icon={calendar} />
          <ion-label>Schedule</ion-label>
          <ion-badge>6</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="speakers">
          <ion-icon icon={personCircle} />
          <ion-label>Speakers</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="map">
          <ion-icon icon={map} />
          <ion-label>Map</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="about">
          <ion-icon icon={informationCircle} />
          <ion-label>About</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  );
} 
