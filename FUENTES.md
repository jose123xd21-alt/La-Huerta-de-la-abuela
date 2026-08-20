# Fuentes y criterio agronómico

Esta primera versión prioriza la estructura de gestión diaria. La información agronómica incluida es general y deliberadamente evita presentar como “receta” datos legales que cambian por cultivo, producto, formulación o fecha.

## Fuentes de referencia

### España — productos fitosanitarios

- Registro de Productos Fitosanitarios del Ministerio de Agricultura, Pesca y Alimentación (MAPA):
  https://servicio.mapa.gob.es/regfiweb

Debe usarse para comprobar el estado actual de un producto, cultivo/usos autorizados, composición y condiciones vigentes. La propia base oficial avisa de que se actualiza periódicamente.

### España — fertilización

- MAPA, Guía práctica de la fertilización racional de los cultivos en España:
  https://www.mapa.gob.es/es/agricultura/publicaciones/publicaciones-fertilizantes

Se utiliza como referencia general sobre nutrición vegetal y fertilización racional. Las necesidades reales dependen de suelo, agua, extracción del cultivo, producción prevista y análisis disponibles.

### Firebase

- Configuración web y SDK modular:
  https://firebase.google.com/docs/web/setup
- Authentication email/password:
  https://firebase.google.com/docs/auth/web/password-auth
- Persistencia offline de Cloud Firestore:
  https://firebase.google.com/docs/firestore/manage-data/enable-offline
- Reglas de seguridad y `request.auth.uid`:
  https://firebase.google.com/docs/firestore/security/rules-conditions

## Regla de diseño para tratamientos

La aplicación distingue dos capas:

1. **Información general:** identificación, síntomas, prevención y manejo.
2. **Dato legal/etiqueta:** producto, materia activa, dosis, plazo de seguridad y condiciones de uso introducidos por el usuario desde una etiqueta vigente o una consulta oficial.

La app no debe rellenar automáticamente dosis o plazos legales sin una fuente vigente y específica del producto.
