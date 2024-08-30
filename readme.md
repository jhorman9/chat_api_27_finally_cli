1.- CommonJS 
2.- database.js
3.- Sequelize CLI

# Configurar babel para usar ecmascript

## Instalar SEQUELIZE-CLI

```bash
    npx sequelize-cli init
```

1.  Configuración Correcta de Babel:
Asegúrate de tener un archivo de configuración de Babel (como .babelrc o babel.config.js) que esté configurado para transpilar módulos ES a CommonJS. Aquí hay un ejemplo de .babelrc:

    
````json
{
  "presets": ["@babel/preset-env"]
}
````

2. Mantener config.js con Sintaxis CommonJS
Si quieres seguir usando module.exports y require en tu archivo config.js, asegúrate de que Babel lo transpile correctamente. Aquí hay una forma de mantener tu configuración actual con Babel:

* Verifica que tu archivo config.js use la sintaxis CommonJS:
````js
export default {
    development: {
        username: "postgres",
        password: "26105389",
        database: "chat_api_27_finally",
        host: "127.0.0.1",
        dialect: "postgres"
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql"
    }
};
````

* Ajusta el Archivo sequelize.config.js: Como estás utilizando Babel, asegúrate de que tu archivo sequelize.config.js
````js
    import config from './config/config.js';
    export default config;
````

* Verifica la Instalación de Babel: Asegúrate de tener instalados @babel/register y @babel/preset-env como dependencias de desarrollo:

```js
    npm install --save-dev @babel/register @babel/preset-env
```

3. Configurar Sequelize CLI para Usar Babel: 
Configurar Sequelize CLI para Usar Babel Cuando utilices Sequelize CLI con Babel, asegúrate de que estás especificando el archivo de configuración correctamente y que Babel transpila el código antes de ejecutarlo. Ejecuta el comando Sequelize CLI normalmente sin especificar --config porque ya tienes un archivo de configuración Babel que gestiona la transpilación:

```bash
    npx sequelize-cli db:migrate
```

4. Asegúrate de que @babel/register esté cargado antes de usar la CLI
Debes ejecutar la CLI de Sequelize de modo que cargue @babel/register antes de que cualquier archivo de configuración sea interpretado. Asegúrate de que este script se ejecute antes de cualquier comando de Sequelize que necesite config.js:

```bash
    node -r @babel/register ./node_modules/.bin/sequelize db:migrate
```

5. Crear base de datos 
```bash
    npx sequelize-cli db:create
```

6. Crear modelo

```bash
    npx sequelize-cli model:generate --name Users --attributes firstname:string,lastname:string,email:string,avatar:string,password:string,description:string,validEmail:boolean
```