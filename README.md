# La Huerta de la Abuela — versión plana para móvil

**Esta edición no contiene subcarpetas.** Todos los archivos deben subirse directamente a la raíz del repositorio de GitHub. Está preparada así para poder seleccionar y subir los archivos fácilmente desde un teléfono.

PWA móvil para gestión diaria del huerto.

## Lo que incluye esta primera versión

- Inicio con tareas de hoy, próximos trabajos, avisos de seguridad y últimos registros.
- Cuadrícula de cultivos configurable: mostrar/ocultar cultivos.
- Plantaciones por temporada y variedad.
- Ficha por cultivo y plantación.
- Riego: caudal total, goteros, superficie, L/m²/h, objetivo L/m² y cálculo de minutos.
- Registro de riegos y litros aproximados.
- Calendario agronómico orientativo calculado desde siembra/trasplante.
- Tareas editables, posponibles y completables; al completar pasan al cuaderno.
- Abonados con cálculo proporcional de dosis (por ejemplo 2 L/1.000 L para 400 L).
- Tratamientos con datos de etiqueta introducidos por el usuario y cálculo de fecha de recolección permitida según plazo de seguridad.
- Cosechas con kg y estadísticas kg/planta y kg/m².
- pH por zona/cultivo con aviso frente al rango recomendado del cultivo.
- Zonas del huerto y base de historial/rotación por familia botánica.
- Mi almacén con fertilizantes, fitosanitarios, semillas, herramientas y otros.
- Descuento de inventario al registrar abonado cuando se elige un producto del almacén.
- Buscador global y buscador orientativo por síntomas.
- Cuaderno de campo cronológico con filtros.
- Temporadas (Huerto 2026, Huerto 2027...).
- Exportación JSON completa, restauración JSON y exportación CSV del cuaderno.
- PWA: manifest, service worker, iconos 192/512 y modo standalone.
- Funcionamiento local incluso sin Firebase.
- Integración preparada con Firebase Authentication y Cloud Firestore.

## 1. Probar en el ordenador

No abras `index.html` con doble clic, porque los módulos y el Service Worker necesitan HTTP/HTTPS.

Desde la carpeta del proyecto:

```bash
python -m http.server 8080
```

Abre `http://localhost:8080`.

## 2. Crear Firebase para esta app

Es recomendable usar un proyecto Firebase independiente llamado, por ejemplo, `la-huerta-de-la-abuela`.

1. Crea el proyecto en Firebase Console.
2. Añade una aplicación Web.
3. En Authentication > Sign-in method habilita **Email/Password**.
4. Crea **Cloud Firestore**.
5. Copia la configuración Web de Firebase.
6. Abre `firebase-config.js` y completa:

```js
export const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

La app usa los módulos de navegador de Firebase JS SDK 12.17.0.

## 3. Publicar reglas de Firestore

Copia el contenido de `firestore.rules` en Firestore > Rules y publícalo.

Los datos de la app se guardan en:

```text
/users/{uid}/data/main
```

Las reglas solo permiten leer/escribir cuando el `uid` autenticado coincide con el `uid` de la ruta.

## 4. Sincronización y uso sin Internet

- Antes de configurar Firebase, la app usa almacenamiento local del navegador.
- Con Firebase configurado e iniciando sesión, el estado se sincroniza con Firestore.
- Firestore está inicializado con caché persistente multi-pestaña.
- La PWA también guarda el shell de la app en el Service Worker.
- Si no hay Internet, se pueden seguir haciendo registros locales; al recuperar conexión, Firestore puede sincronizar los cambios pendientes.

## 5. Instalar como aplicación

### Android / Chrome

1. Abre la URL publicada.
2. Menú de Chrome > **Instalar aplicación** o **Añadir a pantalla de inicio**.
3. Se abrirá en modo independiente.

### iPhone / Safari

1. Abre la URL en Safari.
2. Compartir > **Añadir a pantalla de inicio**.
3. Abre el icono desde la pantalla de inicio.

### Ordenador

Chrome/Edge mostrarán la opción de instalar cuando la PWA cumpla los requisitos y esté servida por HTTPS.

## 6. Publicar en GitHub Pages

1. Crea un repositorio nuevo para esta app.
2. Sube el contenido de esta carpeta a la raíz.
3. Settings > Pages > Deploy from branch > `main` / root.
4. Cuando tengas la URL pública, añádela en Firebase Authentication > Settings > Authorized domains si fuera necesario.

El `start_url` y el Service Worker usan rutas relativas para funcionar también en un subdirectorio de GitHub Pages.

## 7. Información agronómica

`data.js` contiene el catálogo agronómico separado de los registros personales. Esta versión incluye una base práctica para los cultivos principales y problemas frecuentes.

La app **no genera dosis fitosanitarias legales ni plazos de seguridad**. En tratamientos, esos datos deben copiarse de la etiqueta vigente del producto autorizado. Esto evita mezclar consejos generales con información legal que puede cambiar.

## 8. Arquitectura para ampliar

- `index.html`: shell de la PWA.
- `styles.css`: diseño mobile-first.
- `app.js`: lógica, formularios, registros, Firebase y navegación.
- `data.js`: catálogo de cultivos, nutrientes y problemas agronómicos.
- `firebase-config.js`: configuración Firebase del proyecto.
- `manifest.json`: instalación PWA.
- `sw.js`: caché offline del shell.
- `firestore.rules`: aislamiento de datos por usuario.

Para una segunda fase conviene ampliar `data.js` con fichas más profundas por cultivo/plaga/enfermedad y, si se quieren fotografías, añadir un banco de imágenes con licencia y metadatos de fuente.