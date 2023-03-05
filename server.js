import express from 'express';
import cors from 'cors';
import clothes from './data/clothes.js'
const app = express();

app.locals = {
  title: `Sadie's Closet API`,
  clothes
}

app.use(express.json());
app.use(cors())


app.get('/api/v1/clothes', (req, res) => {
  res.status(200).json({ clothes: app.locals.clothes })
})


const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
