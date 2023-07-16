const express = require('express');
const methodOverride = require('method-override');
const acticleRouter = require('./routes/articles');
const Article = require('./models/article')
const mongoose  = require('mongoose');
const app = express();

const MONGO_URL = "";

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(console.log('connect')).catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.get('/', async (req, res) => {
   const articles = await Article.find().sort({ createdAt: 'desc'});
  res.render('articles/index', {articles: articles})
});

app.listen(5000, () => {
  console.log('listening on port 5000!');
});



app.use('/articles', acticleRouter);