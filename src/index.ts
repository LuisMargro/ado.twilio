import express, { type Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.get('/webhook', (res: Response) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:${PORT}`);
});
