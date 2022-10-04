# Node + Postgres login registration system
#Abimbola Oluwatobiloba


This is the Postgres version of my simple implementation of a login/registration system.
The purpose of this repository is simply to try out Node + Postgres and to test it out Heroku's Postgres.

You can register, authenticate (retrieve JSON web token with valid credentials) and do CRUD operations on users.

## RESTful Routes
- POST /api/auth/register
- POST /api/auth/authenticate
- GET /api/v1/users
- GET /api/v1/users/me
- GET /api/v1/users/:id
- PUT /api/v1/users/:id/name
- PUT /api/v1/users/:id/email
- PUT /api/v1/users/:id/password
- DELETE /api/v1/users/:id

MongoDB version here: https://github.com/anthonynsimon/node-mongodb-registration
