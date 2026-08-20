// Crea un proyecto Firebase NUEVO para esta app y pega aquí la configuración de tu app web.
// No reutilices claves/IDs de otros proyectos si quieres mantener las aplicaciones separadas.
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

export const firebaseEnabled = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);
