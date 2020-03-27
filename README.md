# Coop.-16-de-Agosto

STACK MEVN - VUEJS, NODEJS, EXPRESS Y MONGODB
https://www.youtube.com/watch?v=NQFaukftHpg
https://www.youtube.com/watch?v=qc3aqxmEwEM&list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT&index=11

npm i express body-parser mongoose morgan  (dependecia de servidor, pentiende el formato json, para la base de datos, ver las peticiones que llegan a nuestro servidor )
npm i cors (Middleware de express: permite hablar con otro servidor en este caso, hay un servidor frond, backend)
npm i webpack webpack-cli -D (Tranpilador de codigo, se encarga de encarga de enpaquetar codigo  del frontend para ser usado)
npm i axios -D (permite hacer peticiones http al servidor)
npm i vue-axios -D(comunica axios con vue)
npm i vue -D
npm i vue-router -D 
npm i vue-loader  -D(integra vue con webpack)
npm i vue-template-compiler -D (para que entienda axios la  sixtaxis de vue)
npm i babel-core -D (transforma a codigo soportado por el navegador)
npm i babel-loader -D (integra babel con webpack)
npm i vue-style-loader -D 
npm i css-loader webpack-dev-server -D (necesario por que vue integra js, css, html) agrega todo como dependecia 

npm install --save-dev @babel/core @babel/preset-env  (Update babel)

///Para el servidor del frontend se trabaja con el archivo de webpack.config.js

"build": "webpack",  (para construir la app del frontend(npm run webpack:watch))
"start" : "node src/server.js", (para correr el servidor backend (npm start))

npm install --save connect-history-api-fallback -D

instalar la el extension vetur

npm install vue-cookies --save (Para el logueo mediante cookies-frontend)
npm install --save body-parser cookie-session express passport passport-local(para el logue backend)

npm install vue-cookies --save

npm i vuex




https://www.youtube.com/watch?v=yKWQKO4XU5I&t=32s
a la hora de desplegar en heroku cambiar las de pendencias de "devDependencies" a  "dependencies"

#user -(Login)
diego 
12345
