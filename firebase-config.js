// Configuración de Firebase para La Huerta de la Abuela

export const firebaseConfig = {
  apiKey: "AIzaSyBi3WtWQZbEJikPvlOwKY41h0CkPySJiZA",
  authDomain: "la-huerta-de-la-abuela.firebaseapp.com",
  projectId: "la-huerta-de-la-abuela",
  storageBucket: "la-huerta-de-la-abuela.firebasestorage.app",
  messagingSenderId: "216733813752",
  appId: "1:216733813752:web:e8da21bb3ae6004e4de40d"
};

// app.js importa esta constante para saber si debe iniciar Firebase.
export const firebaseEnabled = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);
