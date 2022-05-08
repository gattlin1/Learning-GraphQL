const { UserList, MovieList } = require('../FakeData');

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (_, args) => {
      const id = Number(args.id);
      for (const user of UserList) {
        if (user.id === id) return user;
      }
    },
    movies: () => {
      return MovieList;
    },
    movie: (_, args) => {
      for (const movie of MovieList) {
        if (movie.name === args.name) return movie;
      }
    },
  },

  User: {
    favoriteMovies: () => {
      return MovieList.filter(
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },
};

module.exports = { resolvers };
