## **Probando el entorno de la rama TARUGOCONF3-BOOTSTRAP-EXAMPLE**
	Entráis en dicha rama desde VSCode y hacéis lo siguiente para asegurarnos que funciona todo bien.

	1. **Ver si se activa el visor de git (1), el live server (2), y el minify (3)**, salen en la barra de estado.
	Pulsad en "Go Live" y debería abrirse el proyecto en el navegador.

	(Nota: el servidor está configurado en el puerto 3001, si lo tenéis ocupado con otra cosa tenéis que cambiarlo en los user settings, si no sabéis, me lo decís)

	Hay que darle un momento, en Windows a mí me tarda un poco, en mac es casi inmediato al abrir el proyecto.
	Si no reconoce el repositorio, pinchad en la opción de git a ver si así espabila.
	Si no se activa el live server, poneos encima del index.html -> botón derecho -> "Open with live server".

	2. **Probar minify**
	Os metéis en el directorio "css", abrís "custom.css", cambiáis el color del background y verificáis que os minifica el archivo (custom.min.css) en la misma carpeta.
	Ambos archivos deberían aparecer como "modificados"

## **Probando el entorno de la rama TARUGOCONF3-CRAFTER-WEB**
	Entráis en dicha rama desde VSCode y hacéis lo siguiente para asegurarnos que funciona todo bien.

	1. **Ver si se activa todo lo anterior Y EL COMPILADOR DE SASS**
		Tiene que salir en la barra de estado "Watch Sass"

	2. **Poner en marcha el compilador Sass**
		Arranco el compilador pulsando donde pone “Watch Sass” cambiará a “Watching…” y en consola nos dice que está escuchando.

	3. **Probar el compilador Sass**
		Me voy a steps/01/_site.scss, lo abro, pongo arriba del todo cualquier cosa (ver captura), guardo, y me aseguro que me está modificando styles.min.css dentro de dist/css/

	4. **Borrad lo que acabáis de poner** para que no nos quede ahí para el taller.

