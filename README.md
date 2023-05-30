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

#### Technical Dependencies

- Node.js
- Express
- Morgan
- MongoDB
- Mongoose
- Passport

#### Testing Tools

Postman

## Endpoints

### Get a list of all movies

**Endpoint:** /movies

**HTTP Method:** GET

**Request body data format:** None

**Response body data format:** JSON Object holding data about all movies

### Get data about a single movie by title

**Endpoint:** /movies/[Title]

**Query Parameters:** [Title] of movie

**HTTP Method:** GET

**Request body data format:** None

**Response body data format:** JSON object holding data about a single movie, containing title, description, genre, director, imageURL, featured or not.

**Response Example:**

```
{
    "Genre": {
        "Name": "Mystery",
        "Description": "A mystery film is a genre of film that revolves around the solution of a problem or a crime."
    },
    "Director": {
        "Name": "Richard Kelly",
        "Bio": "James Richard Kelly is an American filmmaker and screenwriter, who initially gained recognition for writing and directing the cult classic Donnie Darko in 2001.",
        "Birthday": "1975-03-28"
    },
    "Actors": [],
    "_id": "63b5b9fd5f0d693ad8d4e31f",
    "Title": "Donnie Darko",
    "Description": "A mystery film is a genre of film that revolves around the solution of a problem or a crime.",
    "ImageURL": "https://upload.wikimedia.org/wikipedia/en/d/db/Donnie_Darko_poster.jpg",
    "Featured": true,
    "Year": "2001"
}
```

### Get data about a genre by name

**Endpoint:** /movies/genre/[Name]

**Query Parameters:** [Name] of genre

**HTTP Method:** GET

**Request body data format:** None

**Response body data format:** A JSON object holding data about a movie genre containing name and description.

**Response Example:**

```
{
    "Name": "Drama",
    "Description": "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
}
```

### Get data about a director by name

**Endpoint:** /movies/director/[Name]

**Query Parameters:** [Name] of director

**HTTP Method:** GET

**Request body data format:** None

**Response body data format:** JSON object holding data about a director, containing name, bio, date of birth and death if existing.

**Response Example:**

```
{
    "Name": "Christopher Nolan",
    "Bio": "Christopher Edward Nolan CBE is a British-American filmmaker. Known for his lucrative Hollywood blockbusters with complex storytelling, Nolan is considered a leading filmmaker of the 21st century. His films have grossed $4.9 billion worldwide.",
    "Birthday": "1970"
}
```

### Get a list of all users

**Endpoint:** /users

**HTTP Method:** GET

**Request body data format:** None

**Response body data format:** JSON object holding data about all users.

### Get a user by username

**Endpoint:** /users/[Username]

**Query Parameters:** [Username] of user

**HTTP Method:** GET

**Request body data format:** None

**Response body data format:** JSON object holding data about a single user.

**Response Example:**

```
{
        "_id": "647624ca29e0f06602c0fb29",
        "Username": "ruitest123",
        "Password": "$2b$10$0cTY.9ldpbtCXQTB9.QlkOSHU0kwSnLWbjcOwHb/mtdGN6MChKVa6",
        "Email": "test1@email.com",
        "Birthday": "1991-11-11T00:00:00.000Z",
        "FavoriteMovies": [],
        "__v": 0
    }
```

### Add a new User

**Endpoint:** /users

**HTTP Method:** POST

**Request body data format:** JSON object holding data about a user, structured like:

**Request Example:**

```
{
    "Username": "ruitest123",
    "Password": "Password123!",
    "Email": "test1@email.com",
    "Birthday": "1991/11/11"
}


```

**Response body data format:** JSON object holding data about the user that was added, including an ID and a "Favorites" key.

**Response Example:**

```
{
    "Username": "ruitest123",
    "Password": "$2b$10$0cTY.9ldpbtCXQTB9.QlkOSHU0kwSnLWbjcOwHb/mtdGN6MChKVa6",
    "Email": "test1@email.com",
    "Birthday": "1991-11-11T00:00:00.000Z",
    "FavoriteMovies": [],
    "_id": "647624ca29e0f06602c0fb29",
    "__v": 0
}
```

### Update user info by username

**Endpoint:** /users/[Username]

**Query Parameter:** [Username] of user

**HTTP Method:** PUT

**Request body data format:** JSON object holding data to be updated, structured like:

**Request Example:**

```
{
    "Username": "ruitest123",
    "Password": "Newpassword!",
    "Email": "test1@email.com",
    "Birthday": "1991/11/11"
}
```

**Response body data format:** JSON data holding updated user info.

**Response Example:**

```
{
    "_id": "647624ca29e0f06602c0fb29",
    "Username": "ruitest123",
    "Password": "$2b$10$IC.OAhlShLQZWtdorx.F3Ose7ZktiEkSguGIPONWP7jQ91zriZnUy",
    "Email": "test1@test.com",
    "FavoriteMovies": [],
    "__v": 0,
    "Birthday": "1991-01-01T00:00:00.000Z"
}
```

### Add a movie to list of favorites by movie ID

**Endpoint:** /users/[Username]/movies/[MovieID]

**Query Parameter:** [Username] of user and [MovieID]

**HTTP Method:** POST

**Request body data format:** None

**Response body data format:** A text message indicating the movie was added to the list of favorites and the updated list of favorites.

**Response Example:**

```
The movie with ID 63f8dd377f048e406baf4a34 was successfully added to list of favorites. Favorites of ruitest123:
63f8dd377f048e406baf4a34,63b5b9fd5f0d693ad8d4e325,63b5b9fd5f0d693ad8d4e325
```

### Delete a movie from list of favorites by movie ID

**Endpoint:** /users/[Username]/movies/[MovieID]

**Query Parameter:** [Username] of user and [MovieID]

**HTTP Method:** DELETE

**Request body data format:** None

**Response body data format:** A text message indicating whether the movie was successfully removed and the updated list of favorites.

**Response Example:**

```
The movie with ID 63f8dd377f048e406baf4a34 was successfully deleted to list of favorites. Favorites of ruitest123:
63b5b9fd5f0d693ad8d4e325,63b5b9fd5f0d693ad8d4e325
```

### Delete user by username

**Endpoint:** /users/[Username]

**Query Parameter:** [Username] of user

**HTTP Method:** DELETE

**Request body data format:** None

**Response body data format:** A text message indicating whether the user account was successfully deleted.

**Response Example:**

```
ruitest123 was deleted
```

###### [My Flix app](https://movie-api-afonsord.vercel.app/)






