------------INITIAL SET UP-----------

- npm init
- download dependencies
    - express
    - express-session
    - bcryptjs
    - helmet
    - knex
    - nodemon
    - sqlite3
    - jsonwebtoken
    - jest
    - supertest
- add server script
- initialize knex
- set up knex file
    - useNullAsDefault
    - migrations directory
    - testing
- seed directory
    - pool

------------DATABASE SET UP----------
- create db folder
- use knex to make migrations
- create users table
    - first name
    - last name
    - email
    - password
    - id
- add other data if possible
- knex migrate:latest

- create db config file

------------LETS MAKE AN API----------

- index.js
- create api folder: 
    - server.js
    - router.js
    - middleware.js
    - server.specs.js / server.test.js
- user folder
    - model.js
    - userRouter.js
    - userRouter.test.js
- authentication folder // reference guided projects for set up.

------------AUTHORIZATION-------------