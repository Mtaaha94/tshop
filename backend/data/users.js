const bcrypt = require("bcryptjs");

const users = [
  {
    name: "taaha",
    email: "muhammadtaaha123_@hotmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "M Taaha",
    email: "muhammadtaaha.54@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },

  {
    name: "osama maqsood",
    email: "osma12@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
