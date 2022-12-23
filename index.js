const express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  uuid = require('uuid');

const app = express();

app.use(morgan('common'));
app.use(express.static('public'));
app.use(bodyParser.json());

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
    Director: 'Richard Kelly',
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
    Director: 'James Ward Byrkit',
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
    Director: 'Martin Scorsese',
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
    Director: 'Peter Jackson',
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
    Director: 'Peter Jackson',
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
    Director: 'Peter Jackson',
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
    Director: 'Bong Joon Ho',
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
    Director: 'Chris Columbus',
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
    Director: 'David Fincher',
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
    Director: 'Christopher Nolan',
    Year: '2014'
  }
];

//READ

app.get('/', (req, res) => {
  res.send('Welcome to myFlix APP!');
});

app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

app.get('/movies/:title', (req, res) => {
  const { title } = req.params;
  const movie = movies.find((movie) => movie.Title === title);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(400).send('movie not found');
  }
});

//Listen for requests
app.listen(8080, () => console.log('Your app is listening on port 8080'));
