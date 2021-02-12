const {Sequelize, DataTypes} = require ('sequelize');
const db = new Sequelize ('postgres://localhost/bookmarker_db');

const Bookmark = db.define('bookmark', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

const syncAndSeed = async() => {
  await db.sync({force: true})
}

module.exports = {db, syncAndSeed, models: {Bookmark}}
