import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBG_FtZga4XKjNHayXOmxm_q075e1FPBY",
  authDomain: "guest-list-planner.firebaseapp.com",
  projectId: "guest-list-planner",
  storageBucket: "guest-list-planner.firebasestorage.app",
  messagingSenderId: "765170063576",
  appId: "1:765170063576:web:18c54da938725615185fad",
  measurementId: "G-DDZMY601E4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
