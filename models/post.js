var Sequelize = require('sequelize');

if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  var sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
  });
}



//datebase for posts
var Post = sequelize.define('post', {
  email: Sequelize.STRING(100),
  photopath: Sequelize.STRING(100),
  text: Sequelize.STRING(100)
});

Post.sync();

module.exports = Post;