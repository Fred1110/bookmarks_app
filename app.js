const express = require ('express');
const port = process.env.port || 3000;
const app = express();
const {db, syncAndSeed, models} = require ('./db');
const {showBookmarks} = require ('./views/home.js');

const init = async() => {
  try{
    await db.authenticate();
    await syncAndSeed();
    app.listen(port, () => {
      console.log('Connected to app')
    })
  }
  catch(ex){
    console.log(ex)
  }
}

app.get('/', (req, res, next) => {
  try {
    res.redirect('/bookmarks')
  } catch (error) {
    next(error)
  }
})

app.get('/bookmarks', (req, res, next) => {
  try {
    res.send(showBookmarks());
  } catch (error) {
    next(error)
  }
})

init ();

