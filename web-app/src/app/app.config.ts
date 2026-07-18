import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp({
  apiKey: "AIzaSyAPJKL5QpO49A5HrLg3SBA4PklHtv3xelg",
  authDomain: "sami-food-5c155.firebaseapp.com",
  projectId: "sami-food-5c155",
  storageBucket: "sami-food-5c155.firebasestorage.app",
  messagingSenderId: "776825925535",
  appId: "1:776825925535:web:633cde0736f428d3cb57aa",
  measurementId: "G-NQL0W628T4"
});

if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration()
  ]
};
