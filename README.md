# Development

1. Levantar las base de datos docker compose o pgadmin
2. Renombrar .env.example a .env
3. Reemplzar las variables de entorno
4. Ejecutar el comando `npm install`
5. Ejecutar el comando `npm run dev`
6. Ejecutar comandos de prism
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
7. Ejecutar el SEED para [popular la base de datos](http://localhost:3000/api/seed)
