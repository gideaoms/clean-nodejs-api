# Clean Code NodeJS API
 how to run the projet (*you need to have Docker installed*):
 ```sh
npm run dev:compose up
npm run dev:compose exec api npx knex migrate:latest
 ```

how to create a user
```
send a POST method to http://localhost:{{PORT}}/api/v1/users/create

body: {
  name: "any name",
  email: "any email",
  password: "any password"
}
```
