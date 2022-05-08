const { UserList, MovieList } = require('../FakeData');

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (_, args) => {
      const id = Number(args.id);
      return UserList.find((user) => user.id === id);
    },
    movies: () => {
      return MovieList;
    },
    movie: (_, args) => {
      return MovieList.find((movie) => movie.name === args.name);
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

  Mutation: {
    createUser: (_, args) => {
      const user = args.input;
      const newId = UserList[UserList.length - 1].id + 1;
      user.id = newId;

      UserList.push(user);
      return user;
    },
    updateUsername: (_, args) => {
      const id = Number(args.input.id);
      const newUsername = args.input.newUsername;
      const updatedUser = UserList.find((user) => user.id === id);
      if (updatedUser) {
        updatedUser.username = newUsername;
      }

      return updatedUser;
    },
    deleteUser: (_, args) => {
      const id = Number(args.id);
      const userIndexToBeDeleted = UserList.findIndex((user) => user.id === id);
      if (userIndexToBeDeleted !== -1) {
        UserList.splice(userIndexToBeDeleted, 1);
      }

      return null;
    },
  },
};

module.exports = { resolvers };
