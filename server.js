// importing packages
import express from 'express';
import cors from 'cors';
import clothes from './data/clothes.js'
const app = express();

app.locals = {
  title: `Sadie's Closet API`,
  clothes
}

// middlewares
app.use(express.json());
app.use(cors())


app.get('/api/v1/clothes', (req, res) => {
  res.status(200).json({ clothes: app.locals.clothes })
})


// port
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));


// const clothes = [
//   {
//     "id": 1,
//     "type": "top",
//     // https://drive.google.com/file/d/1lrlh62q8d61D6VngLbdDiU1z0eM-6Nqu/view?usp=share_link
    
//     "img_url": "https://drive.google.com/uc?export=view&id=1lrlh62q8d61D6VngLbdDiU1z0eM-6Nqu"
//   },
//   {
//     "id": 2,
//     "type": "top",
//     // https://drive.google.com/file/d/1Bh8K_CDZJPoBZVW6heQ5EmjlyjNFJ2xC/view?usp=share_link
//     "img_url": "https://lh6.googleusercontent.com/nZ1nM2QTnNk2sbPY40gKUzu3nfuJm9k0Weqluq7gg3ebwJBXeTs9ykJgq6KJgUHNlpg=w2400"
//   },
//   {
//     "id": 3,
//     "type": "top",
//     "img_url": "https://drive.google.com/file/d/1iWCq37Mn-yse7cta0bN3emg_i6m-9oyc/view?usp=share_link"
//   },
//   {
//     "id": 4,
//     "type": "top",
//     "img_url": "https://drive.google.com/file/d/1UX4_ifAaQueLZeUkLgllimMj9RQ0OaBW/view?usp=share_link"
//   },
//   {
//     "id": 5,
//     "type": "top",
//     "img_url": "https://drive.google.com/file/d/1QT9PNsMNrz2mtlnArKj6qO0oRGIL6h8E/view?usp=share_link"
//   },
//   {
//     "id": 6,
//     "type": "top",
//     "img_url": "https://drive.google.com/file/d/1mLPr6Ie9lc0Dhl54M9gMGEbweQvPsenJ/view?usp=share_link"
//   },
//   {
//     "id": 7,
//     "type": "top",
//     "img_url": "https://drive.google.com/file/d/12DVAIZ49F1HChNxvzqVz5IeNsCHLGTLw/view?usp=share_link"
//   },
//   {
//     "id": 8,
//     "type": "bottom",
//     "img_url": "https://drive.google.com/file/d/1E943gm0vYFz5vOdmUCVSiko0kr9A-59e/view?usp=share_link"
//   },
//   {
//     "id": 9,
//     "type": "bottom",
//     "img_url": "https://drive.google.com/file/d/1dS-CqF5HrQ6xDuhsYlBjlY7WiBwU-rrN/view?usp=share_link"
//   },
//   {
//     "id": 10,
//     "type": "bottom",
//     "img_url": "https://drive.google.com/file/d/1vQk9xAg8aQDoc9wENOWvucMSrU321I76/view?usp=share_link"
//   },
//   {
//     "id": 11,
//     "type": "bottom",
//     "img_url": "https://drive.google.com/file/d/13VE4tRFyS-Fg-vcNyzhlwQn5vjgUF3ns/view?usp=share_link"
//   },
//   {
//     "id": 12,
//     "type": "bottom",
//     "img_url": "https://drive.google.com/file/d/1nMe8WJepA1-L5gY5TI5vB816UrkWosCN/view?usp=share_link"
//   },
//   {
//     "id": 13,
//     "type": "bottom",
//     "img_url": "https://drive.google.com/file/d/15p8vFfEz-SxIbsnlbaxMzIzAeljr8npI/view?usp=share_link"
//   },
//   {
//     "id": 14,
//     "type": "bottom",
//     "img_url": "https://drive.google.com/file/d/1GjSjTjGy0dr37QXr08CH-uc9gEwaesmS/view?usp=share_link"
//   },
// ]