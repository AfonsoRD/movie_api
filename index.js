const express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

const app = express();

app.use(morgan('common'));
app.use(express.static('public'));
app.use(bodyParser.json());

let users = [
  {
    id: '1',
    name: 'Rui',
    favoriteMovies: []
  },
  {
    id: '2',
    name: 'Bao',
    favoriteMovies: ['Parasite']
  }
];
let movies = [
  {
    Title: 'Donnie Darko',
    Description:
      'After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.',
    Genre: {
      Name: 'Mystery',
      Description:
        'A mystery film is a genre of film that revolves around the solution of a problem or a crime.'
    },
    Director: {
      Name: 'Richard Kelly',
      Bio: 'James Richard Kelly is an American filmmaker and screenwriter, who initially gained recognition for writing and directing the cult classic Donnie Darko in 2001.',
      Year: '1975'
    },
    Year: '2001'
  },
  {
    Title: 'Coherence',
    Description:
      'Strange things begin to happen when a group of friends gather for a dinner party on an evening when a comet is passing overhead.',
    Genre: {
      Name: 'Mystery',
      Description:
        'A mystery film is a genre of film that revolves around the solution of a problem or a crime.'
    },
    Director: {
      Name: 'James Ward Byrkit',
      Bio: 'James Ward Byrkit is an American film director, writer, and actor. He is best known for directing the science fiction thriller Coherence and co-writing the script for Rango, one of his many collaborations with Gore Verbinski. For Rango, Byrkit starred as several characters, most notably Waffles, a horned lizard.',
      Year: '1985'
    },
    Year: '2013'
  },
  {
    Title: 'Shutter Island',
    Description:
      'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',
    Genre: {
      Name: 'Mystery',
      Description:
        'A mystery film is a genre of film that revolves around the solution of a problem or a crime.'
    },
    Director: {
      Name: 'Martin Scorsese',
      Bio: 'Martin Charles Scorsese is an American film director, producer, screenwriter and actor. Scorsese emerged as one of the major figures of the New Hollywood era.',
      Year: '1942'
    },
    Year: '2010'
  },
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    Genre: {
      Name: 'Action',
      Description:
        'Action films are built around a core set of characteristics: spectacular physical action; a narrative emphasis on fights, chases, and explosions; and a combination of state-of-the-art special effects and stunt-work.'
    },
    Director: {
      Name: 'Peter Jackson',
      Bio: 'Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter and producer. He is best known as the director, writer and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.',
      Year: '1961'
    },
    Year: '2001'
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    Genre: {
      Name: 'Action',
      Description:
        'Action films are built around a core set of characteristics: spectacular physical action; a narrative emphasis on fights, chases, and explosions; and a combination of state-of-the-art special effects and stunt-work.'
    },
    Director: {
      Name: 'Peter Jackson',
      Bio: 'Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter and producer. He is best known as the director, writer and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.',
      Year: '1961'
    },
    Year: '2002'
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    Genre: {
      Name: 'Action',
      Description:
        'Action films are built around a core set of characteristics: spectacular physical action; a narrative emphasis on fights, chases, and explosions; and a combination of state-of-the-art special effects and stunt-work.'
    },
    Director: {
      Name: 'Peter Jackson',
      Bio: 'Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter and producer. He is best known as the director, writer and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.',
      Year: '1961'
    },
    Year: '2003'
  },
  {
    Title: 'Parasite',
    Description:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    Genre: {
      Name: 'Drama',
      Description:
        "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
    },
    Director: {
      Name: 'Bong Joon Ho',
      Bio: 'Bong Joon-ho is a South Korean film director, producer and screenwriter. The recipient of four Academy Awards, his filmography is characterised by emphasis on social themes, genre-mixing, black humor, and sudden tone shifts.',
      Year: '1969'
    },
    Year: '2019'
  },
  {
    Title: "Harry Potter and the Philosopher's Stone",
    Description:
      'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.',
    Genre: {
      Name: 'Adventure',
      Description:
        'Adventure film is a genre that revolves around the conquests and explorations of a protagonist. The purpose of the conquest can be to retrieve a person or treasure, but often the main focus is simply the pursuit of the unknown. These films generally take place in exotic locations and play on historical myths.'
    },
    Director: {
      Name: 'Chris Columbus',
      Bio: 'Chris Joseph Columbus is an American filmmaker. Born in Spangler, Pennsylvania, Columbus studied film at Tisch School of the Arts where he developed an interest in filmmaking.',
      Year: '1958'
    },
    Year: '2001'
  },
  {
    Title: 'Fight Club',
    Description:
      'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    Genre: {
      Name: 'Drama',
      Description:
        "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
    },
    Director: {
      Name: 'David Fincher',
      Bio: 'David Andrew Leo Fincher is an American film director. His films, mostly psychological thrillers and biographical dramas, have received 40 nominations at the Academy Awards, including three for him as Best Director. Fincher was the co-founder of Propaganda Films, a film and music video production company.',
      Year: '1962'
    },
    Year: '1999'
  },
  {
    Title: 'Interstellar',
    Description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Genre: {
      Name: 'Drama',
      Description:
        "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
    },
    Director: {
      Name: 'Christopher Nolan',
      Bio: 'Christopher Edward Nolan CBE is a British-American filmmaker. Known for his lucrative Hollywood blockbusters with complex storytelling, Nolan is considered a leading filmmaker of the 21st century. His films have grossed $4.9 billion worldwide.',
      Year: '1970'
    },
    Year: '2014'
  }
];

//CREATE

app.post('/users', (req, res) => {
  const newUser = req.body;

  if (newUser.name) {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(400).send('user need a name');
  }
});

//UPDATE
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  let user = users.find((user) => user.id == id);

  if (user) {
    user.name = updatedUser.name;
    res.status(200).json(user);
  } else {
    res.status(400).send('user not found');
  }
});

//POST
app.post('/users/:id/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;
  const updatedUser = req.body;

  let user = users.find((user) => user.id == id);

  if (user) {
    user.favoriteMovies.push(movieTitle);
    res.status(200).send(`${movieTitle} has been added to user ${id}'s array`);
  } else {
    res.status(400).send('movie not found');
  }
});

//DELETE
app.delete('/users/:id/:movieTitle', (req, res) => {
  const { id, movieTitle } = req.params;
  const updatedUser = req.body;

  let user = users.find((user) => user.id == id);

  if (user) {
    user.favoriteMovies = user.favoriteMovies.filter(
      (title) => title !== movieTitle
    );
    res
      .status(200)
      .send(`${movieTitle} has been removed from user ${id}'s array`);
  } else {
    res.status(400).send('movie not found');
  }
});

//DELETE
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  let user = users.find((user) => user.id == id);

  if (user) {
    users = users.filter((user) => user.id != id);
    res.status(200).send(`user ${id} as been deleted`);
  } else {
    res.status(400).send('user not found');
  }
});

//READ

app.get('/', (req, res) => {
  res.send('Welcome to myFlix APP!');
});

// All movies
app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

//By Title
app.get('/movies/:title', (req, res) => {
  const { title } = req.params;
  const movie = movies.find((movie) => movie.Title === title);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(400).send('movie not found');
  }
});

//By Genre

app.get('/movies/genre/:genreName', (req, res) => {
  const { genreName } = req.params;
  const genre = movies.find((movie) => movie.Genre.Name === genreName).Genre;

  if (genre) {
    res.status(200).json(genre);
  } else {
    res.status(400).send('genre not found');
  }
});

//By Director

app.get('/movies/directors/:directorName', (req, res) => {
  const { directorName } = req.params;
  const director = movies.find(
    (movie) => movie.Director.Name === directorName
  ).Director;

  if (director) {
    res.status(200).json(director);
  } else {
    res.status(400).send('Director not found');
  }
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

// ERROR Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

//Listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080');
});
