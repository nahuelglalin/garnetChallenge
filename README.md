# Garnet Challenge

Aplicación creada con react-native para ejecutar en Android y iOs

## Instrucciones para ejecutar la App

Clonar el proyecto

### `git clone https://github.com/nahuelglalin/garnetChallenge.git`

Una vez clonado, entrar a la carpeta que contiene el proyecto

### `cd garnetChallenge`

En esta carpeta, debemos instalar los módulos de Node

### `npm install - yarn install`

Por último, debemos ejecutar el proyecto en el emulador deseado:

Android: 

### `npx react-native run-android`

En iOS:

Ejecutaremos estos dos comandos:

### `npx pod-install`
### `npx react-native run-ios`

Y listo, ya podemos utilizar la app.

# Información

La Aplicacion maneja permisos de Geolocalización para conocer la ubicación del usuario, y en base a eso mostrar el clima.
El clima es consumido de una API, mediante una Http Request ejecutada con axios.
Se utilizaron Stack Navigator para el pasaje de la pantalla de login a la de HomeScreen, y además, para proteger las rutas, es decir, no acceder a la HomeScreen
si el usuario no se logea.
Para el pasaje entre screens dentro de la app ya logeado, se utilizó Bottom Tab Navigator.
La información de la App es manejada con Context. 
El Background del darkMode de la app fue creado por la librería react-native-linear-gradient 


# Login

Lo primero que veremos al ingresar a la App, es la pantalla del login. La aplicación cuenta con manejo de 'theme' (tema oscuro, y tema claro). 
Para logearse como administrador, deberemos utilizar las siguientes credenciales:

email: admin@admin
pw: admin

Para logearnos como usuario NO administrador, utilizaremos:

email: user@user
pw: user

![LoginScreen](https://user-images.githubusercontent.com/78276469/175830923-9f6dc3e8-a428-41e0-8213-491d1af8e08c.png)


# Home

Pantalla principal, el usuario podrá observar el clima, según la ubicación en la que se encuentre.
Ambos usuarios (user y admin) podrán ver el clima. 

![HomeScreen](https://user-images.githubusercontent.com/78276469/175830986-2e7aad2a-bc5a-435b-9c66-6566791017ea.png)

Solo el administrador podrá calcular cuantos cajones de cerveza se necesitarán, segun el número de invitados que ingrese.
Si la temperatura está entre 24 y 20, cada invitado consumirá 1 cerveza. 
Si la temperatura es menor a 20, cada invitado consumirá 0.75 cervezas.
Si la temperatura es mayor a 24, cada invitado consumirá 2 cervezas.

El cajón de cervezas trae 6, y siempre se mostrarán cajones de sobra, es decir, no se mostrará algo como "1,5 cajones" si no, que se redondeará para arriba.

![UserAndAdminProfiles](https://user-images.githubusercontent.com/78276469/175831951-e3ae805a-f820-4fc2-a199-e56bb035827e.png)

En caso de que el usuario no le conceda los permisos a la App, se mostrará en pantalla que no hay permisos para conocer la ubicación,
por lo tanto, el clima no se mostrá.
Al tocar el botón, se navegara a las settings del sistema operativo, a la parte de permisos de la aplicación. 

![LocationBlocked](https://user-images.githubusercontent.com/78276469/175831200-3a29acd4-c0e5-4861-a2ef-b98eecc41d8c.png)

![Permissions](https://user-images.githubusercontent.com/78276469/175831215-a44e2b4c-8207-42e1-a81f-1a24ec6096e8.png)


# Meeting & Settings Screen

En la pantalla de Meeting, el usuario podrá crear una meeting en caso de ser administrador, y en caso de ser usuario, solo podrá unirse a una ya existente.

En la pantalla de Settings, el usuario podrá ver su rol (User o Admin), y podrá setear el theme de la app (Tema claro o tema oscuro)

![MeetingAndSettings](https://user-images.githubusercontent.com/78276469/175832032-0c4e518d-ebc3-4670-89e0-10cedf8123ad.png)

![SettingsTheme](https://user-images.githubusercontent.com/78276469/175832037-07b3cbd0-9e45-4d88-b1af-747c0186ada4.png)

![UserMeetingAndSettings](https://user-images.githubusercontent.com/78276469/175832050-b7c44583-6726-4620-8673-2622de1a49dd.png)

La información mostrada en el Settings Screen está hardcodeada, excepto el rol del usuario, y si la App está en DarkMode o LightMode.
El 'switch' de notifiaciones no tiene funcionalidad. 

