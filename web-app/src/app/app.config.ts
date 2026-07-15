import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { initializeApp } from "firebase/app";

// TODO: Use environment variables for Firebase configuration in WebApp
const firebaseConfig = {
  apiKey: "AIzaSyAPJKL5QpO49A5HrLg3SBA4PklHtv3xelg",
  authDomain: "sami-food-5c155.firebaseapp.com",
  projectId: "sami-food-5c155",
  storageBucket: "sami-food-5c155.firebasestorage.app",
  messagingSenderId: "776825925535",
  appId: "1:776825925535:web:633cde0736f428d3cb57aa",
  measurementId: "G-NQL0W628T4"
};

initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration()
  ]
};
