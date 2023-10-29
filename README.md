# Control de gastos con React (Vite) y Tailwind CSS

Este es un proyecto de control de gastos desarrollado en React utilizando Vite como el entorno de desarrollo y Tailwind CSS para estilos rápidos y eficientes.

Esta es la versión en React de la aplicación [Control de Gastos con PHP](https://github.com/josemcj/ControlGastosPHP).

## Descripción
El control de gastos es una aplicación web que te permite realizar un seguimiento de tus ingresos y egresos personales. Puedes definir un presupuesto inicial y a partir de este, registrar ingresos/egresos, editarlos y eliminarlos. La aplicación mostrará la cantidad disponible, sumando los ingresos y restando los egresos del presupuesto inicial.

Para la persistencia de datos, estos se almacenan en Local Storage.

## Instalación
Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:

1. Clona este repositorio: `git clone https://github.com/josemcj/control-gastos-react.git`
2. Navega al directorio del proyecto
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `npm run dev`

## Uso
Al abrir la aplicación en el navegador deberás definir un presupuesto inicial. A continuación, da clic en el botón "Guardar".

![Definir presupuesto](/public/screenshots/01-definir-presupuesto.png)

Inmediatamente la pantalla cambiará y mostrará la pantalla inicial de la aplicación.

Aquí se nos mostrará la cantidad disponible y dos botones. Centremonos en el botón "Agregar gasto".

![Pantalla inicial](/public/screenshots/02-agregar-gasto.png)

Si damos clic en el botón "Agregar gasto" se abrirá una ventana modal con un formulario para agregar un nuevo ingreso/egreso. Todos los campos son obligatorios.

Una vez llenados todos los campos, damos clic en "Guardar". El modal se cerrará y en la pantalla inicial se mostrará una tarjeta con la información de ese registro.
La cantidad disponible se actualizará automáticamente.

![Crear registro](/public/screenshots/03-crear-registro.png)

Si deseamos editar un registro, damos clic en el botón "Editar" del registro y nos abrirá una ventana modal con un formulario para editar la información.

![Editar registro](/public//screenshots/04-editar-registro.png)

Para eliminar un registro damos clic en el botón "Eliminar". Debemos confirmar la eliminación del mismo. La cantidad disponible se actualizará automáticamente a como estaba antes de que ese registro existierá.

![Eliminar registro](/public/screenshots/05-eliminar-registro.png)

Finalmente, tenemos un botón para restaurar completamente la aplicación. Esta acción borrará todos los registros y el presupuesto ingresado inicialmente, ambos almacenados en Local Storage para mantener los datos persistentemente.

Debemos confirmar la acción. En caso de aceptar, nos abrirá nuevamente la sección inicial para definir un presupuesto.

![Restaurar app](/public/screenshots/06-reset-app.png)