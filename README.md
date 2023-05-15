# My Flix API

## Project description

This project is a REST API for a movie platform application that interacts with a database and displays data about different movies, directors, and genres.
The database can store movies and users to the users be able to sign up, login and create a list of their favorite movies.
This API is hosted using Vercel and the database using Atlas MongoDB.

# Hosting
The API is hosted in Vercel Paas service at [https://movie-api-afonsord.vercel.app/](https://movie-api-afonsord.vercel.app/).<br>
The DataBase is hosted in MongoDB.

**Key Features**

Return a list of ALL movies to the user
Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user
Return data about a genre (description) by name/title
Return data about a director (bio, birth year, death year) by name
Allow new users to register
Allow users to update their user info (username, password, email, date of birth)
Allow users to add a movie to their list of favorites
Allow users to remove a movie from their list of favorites
Allow existing users to deregister

# Security
Authentication is controlled with the passport, passport-local, and passport-jwt libraries.<br>
Passwords are hashed using bcrypt when saved in the server. The successful login request will<br>
bear a JWT which will be required for token-based authorization at each endpoint.<br>

#### Technical Dependencies

- Node.js
- Express
- Morgan
- MongoDB
- Mongoose
- Passport

#### Testing Tools

Postman

###### [My Flix app](https://movie-api-afonsord.vercel.app/)









